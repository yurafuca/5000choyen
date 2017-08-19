/* global Settings */
var CanvasImage = function(ctx, width, height) {
  this.ctx = ctx;
  this.width = width;
  this.height = height;
};

CanvasImage.prototype.save = function() {
  var imageData = this.ctx.getImageData(0, 0, this.width, this.height);
  this.saveData(imageData);
};

CanvasImage.prototype.saveData = function(imagedata) {
  var canvas = document.createElement('canvas');
  canvas.width = imagedata.width;
  canvas.height = imagedata.height-10;
  
  var ctx = canvas.getContext('2d');

  // if (Settings.get(`BACKGROUND_ORDER`) === 'white') {
  //   ctx.fillStyle = 'white';
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);
  // }

  ctx.putImageData(imagedata, 0, 0);

  var a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.setAttribute("download", "result.png");
  document.body.appendChild(a);
  a.click();
}
