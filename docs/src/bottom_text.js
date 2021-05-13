function BottomText(ctx) {

    this.value = "";
    this.font = "";
    this.x = 250.0;
    this.y = 230.0;
    this.w = 0.0;
    this.ctx = ctx;

    this.useImg = false;
    this.img = new Image();
    this.img.src = `res/hoshii.png`;
}

BottomText.prototype.draw = function() {
    if (this.useImg) {
        this.drawImg();
        return;
    }

    this.ctx.font = this.font;
    this.ctx.setTransform(1, 0, -0.45, 1, 0, 0);

    //黒色
    {
        this.ctx.strokeStyle = "#000";
        this.ctx.lineWidth = 22;
        this.ctx.strokeText(this.value, this.x + 5, this.y + 2);
    }

    // 銀
    {
        const grad = this.ctx.createLinearGradient(0, this.y - 80, 0, this.y + 18);
        grad.addColorStop(0, 'rgb(0,15,36)');
        grad.addColorStop(0.25, 'rgb(250,250,250)');
        grad.addColorStop(0.5, 'rgb(150,150,150)');
        grad.addColorStop(0.75, 'rgb(55,58,59)');
        grad.addColorStop(0.85, 'rgb(25,20,31)');
        grad.addColorStop(0.91, 'rgb(240,240,240)');
        grad.addColorStop(0.95, 'rgb(166,175,194)');
        grad.addColorStop(1, 'rgb(50,50,50)');
        this.ctx.strokeStyle = grad;
        this.ctx.lineWidth = 19;
        this.ctx.strokeText(this.value, this.x + 5, this.y + 2);
    }

    //黒色
    {
        this.ctx.strokeStyle = "#10193A";
        this.ctx.lineWidth = 17;
        this.ctx.strokeText(this.value, this.x, this.y);
    }

    // 白
    {
        this.ctx.strokeStyle = "#DDD";
        this.ctx.lineWidth = 8;
        this.ctx.strokeText(this.value, this.x, this.y);
    }

    //紺
    {
        const grad = this.ctx.createLinearGradient(0, this.y - 80, 0, this.y);
        grad.addColorStop(0, 'rgb(16,25,58)');
        grad.addColorStop(0.03, 'rgb(255,255,255)');
        grad.addColorStop(0.08, 'rgb(16,25,58)');
        grad.addColorStop(0.2, 'rgb(16,25,58)');
        grad.addColorStop(1, 'rgb(16,25,58)');
        this.ctx.strokeStyle = grad;
        this.ctx.lineWidth = 7;
        this.ctx.strokeText(this.value, this.x, this.y);
    }

    //銀
    {
        const grad = this.ctx.createLinearGradient(0, this.y - 80, 0, this.y);
        grad.addColorStop(0, 'rgb(245,246,248)');
        grad.addColorStop(0.15, 'rgb(255,255,255)');
        grad.addColorStop(0.35, 'rgb(195,213,220)');
        grad.addColorStop(0.5, 'rgb(160,190,201)');
        grad.addColorStop(0.51, 'rgb(160,190,201)');
        grad.addColorStop(0.52, 'rgb(196,215,222)');
        grad.addColorStop(1.0, 'rgb(255,255,255)');
        this.ctx.fillStyle = grad;
        this.ctx.fillText(this.value, this.x, this.y - 3);
    }

    this.w = this.ctx.measureText(this.value).width + 30;
}

BottomText.prototype.drawImg = function() {
    const x = this.x;
    const y = this.y - 100.0;

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);

    this.onLoadImg(() => {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.drawImage(this.img, x + 5, y + 2);
        this.w = this.img.width + 30;
    });

    this.w = this.img.width + 30;
}

BottomText.prototype.onLoadImg = function(callback) {
    if (this.isLoadedImg()) {
        callback();
        return;
    }
    this.img.onload = callback;
}

BottomText.prototype.isLoadedImg = function() {
    if (!this.img.complete) return false;
    if (typeof this.img.naturalWidth !== "undefined" && this.img.naturalWidth === 0) return false;
    return true;
}
