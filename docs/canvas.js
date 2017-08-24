/* globals SETTINGS, Drawer */
var Canvas = function(canvas) {
  this.canvas = canvas;
  this.canvas.addEventListener('mousedown', this.onDown.bind(this), false);
  this.canvas.addEventListener('mousemove', this.onMove.bind(this), false);
  this.canvas.addEventListener('mouseup', this.onUp.bind(this), false);

  this.ctx = canvas.getContext('2d');
  this.ctx.lineJoin = 'round';
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  
  this.dragging = false;
  this.dragPosition = {
    x0: 0,
    y0: 0
  };

  this.drawer = new Drawer();
}

Canvas.prototype.onDown = function(e) {
  this.dragging = true;
  this.dragPosition.x0 = e.clientX;
  this.dragPosition.y0 = e.clientY;
};

Canvas.prototype.onMove = function(e) {
  if (this.dragging) {
    const dx = e.clientX - this.dragPosition.x0;
    const x = this.offset.bottom.x + dx;
    if (SETTINGS.TEXT_ORDER === "image")
      this.redrawImage(x);
    else
      this.redrawBottom(x);
  }
  if (Canvas.upperEndPosition() < e.clientY && e.clientY < Canvas.lowerEndPosition)
    document.body.style.cursor = "move";
  else
    document.body.style.cursor = "auto"
};

Canvas.prototype.onUp = function (e) {
  var dx = e.clientX - this.dragPosition.x0;
  this.offset.bottom.x += dx;
  this.dragging = false;
};

Canvas.prototype.upperEndPosition = function() {
  return this.canvas.getBoundingClientRect().top + (this.canvas.height - 10);
}

Canvas.prototype.lowerEndPosition = function() {
 return this.canvas.getBoundingClientRect().top + this.offset.bottom.y;
}

Canvas.prototype.redrawTop = function () {
  const text = document.getElementById("textboxTop").value;
  this.drawer.redrawTop(text);
}

Canvas.prototype.redrawBottom = function (offsetX) {
  const text = document.getElementById("textboxBottom").value.replace(/！/, `!`);
  this.drawer.redrawBottom(text, offsetX);
}

Canvas.prototype.redrawImage = function(offsetX) {
  this.drawer.redrawImage(offsetX);
}

Canvas.prototype.save = function() {
  this.drawer.save();
}
