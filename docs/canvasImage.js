var CanvasImage = function (ctx, width, height) {
  this.ctx = ctx;
  this.width = width;
  this.height = height;
};

CanvasImage.prototype.save = function (ctx, width, height) {
  var imageData = this.ctx.getImageData(0, 0, this.width, this.height);
  this.saveData(imageData);
};

CanvasImage.prototype.saveData = function (imagedata) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = imagedata.width + 10;
  canvas.height = imagedata.height;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height + 100);
  ctx.putImageData(imagedata, 0, 0);

  var a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.setAttribute("target", "_blank");
  document.body.appendChild(a);
  a.click();
}
