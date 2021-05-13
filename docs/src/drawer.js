function Drawer(canvas) {

    this.canvas = canvas;
    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this), false);
    this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
    this.canvas.addEventListener('touchstart', this.onTouchStart.bind(this), false);
    this.canvas.addEventListener('touchmove', this.onTouchMove.bind(this), false);
    this.canvas.addEventListener('touchend', this.onTouchEnd.bind(this), false);

    this.ctx = canvas.getContext('2d');
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.topText = new TopText(this.ctx);
    this.bottomText = new BottomText(this.ctx);

    this.useTransparent = false;

    this.dragging = false;
    this.dragStartCursorPos = 0;
    this.dragStartBottomTextPos = 0;

    this.lang = "";
}

Drawer.prototype.refresh = function() {
    this.clear();

    if (this.lang == "ja") {
        this.topText.font = "100px notobk";
        this.bottomText.font = "100px notoserifbk";
    } else {
        this.topText.font = "100px 'Noto Sans SC'";
        this.bottomText.font = "100px 'Noto Serif SC'";
    }

    this.topText.draw();
    this.bottomText.draw();
}

Drawer.prototype.clear = function() {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (!this.useTransparent) {
        this.ctx.fillStyle = `white`;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    } else {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}

Drawer.prototype.onCursorDown = function(e) {
    this.dragging = true;
    this.dragStartCursorPos = e.clientX;
    this.dragStartBottomTextPos = this.bottomText.x;
}

Drawer.prototype.onCursorMove = function(e) {
    if (this.dragging) {
        const dx = e.clientX - this.dragStartCursorPos;
        this.bottomText.x = this.dragStartBottomTextPos + dx;
        this.refresh();
    }

    const bottomTextTop = this.canvas.getBoundingClientRect().top + this.topText.y;
    const bottomTextBottom = this.canvas.getBoundingClientRect().top + this.canvas.height;
    if (bottomTextTop < e.clientY && e.clientY < bottomTextBottom) {
        document.body.style.cursor = "move";
    } else {
        document.body.style.cursor = "auto"
    }
}

Drawer.prototype.onCursorUp = function(e) {
    this.dragging = false;
    this.dragStartCursorPos = 0;
    this.dragStartBottomTextPos = 0;
}

Drawer.prototype.onCursorLeave = function(e) {
    if (this.dragging) {
        this.dragging = false;
        this.dragStartCursorPos = 0;
        this.dragStartBottomTextPos = 0;
    }
    document.body.style.cursor = "auto"
}

Drawer.prototype.onMouseDown = function(e) {
    this.onCursorDown(e);
};

Drawer.prototype.onMouseMove = function(e) {
    this.onCursorMove(e);
};

Drawer.prototype.onMouseUp = function(e) {
    this.onCursorUp(e);
};

Drawer.prototype.onMouseLeave = function(e) {
    this.onCursorLeave(e);
};

Drawer.prototype.onTouchStart = function(e) {
    e.preventDefault();
    e.clientX = e.touches[0].clientX;
    e.clientY = e.touches[0].clientY;
    this.onCursorDown(e);
};

Drawer.prototype.onTouchMove = function(e) {
    e.preventDefault();
    e.clientX = e.touches[0].clientX;
    e.clientY = e.touches[0].clientY;
    this.onCursorMove(e);
};

Drawer.prototype.onTouchEnd = function(e) {
    e.preventDefault();
    e.clientX = e.changedTouches[0].clientX;
    e.clientY = e.changedTouches[0].clientY;
    this.onCursorUp(e);
};

Drawer.prototype.saveImage = function() {
    const width = Math.max(this.topText.x + this.topText.w, this.bottomText.x + this.bottomText.w);
    const height = this.ctx.canvas.height;

    const data = this.ctx.getImageData(0, 0, width, height);
    const canvas = document.createElement('canvas');
    canvas.width = data.width;
    canvas.height = data.height;

    const ctx = canvas.getContext('2d');
    ctx.putImageData(data, 0, 0);

    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.setAttribute("download", "5000choyen.png");

    document.body.appendChild(a);
    a.click();
}

Drawer.prototype.openImage = function() {
    let q =
        'top=' + this.topText.value +
        '&bottom=' + this.bottomText.value +
        '&bx=' + this.bottomText.x +
        '&order=' + this.bottomText.useImg +
        '&color=' + this.useTransparent +
        '&width=' + Math.max(this.topText.x + this.topText.w, this.bottomText.x + this.bottomText.w) +
        '&height=' + this.ctx.canvas.height;
    if (this.lang === "ja") {
        window.open('result.html?' + q);
    } else {
        window.open('result_cn.html?' + q);
    }
}
