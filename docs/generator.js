var Generator = function(ctx, width, height) {
  this.ctx = ctx;
  this.width = width;
  this.height = height;
}

Generator.prototype.save = function() {
  const data = this.ctx.getImageData(0, 0, this.width, this.height);
  const canvas = document.createElement('canvas');
  canvas.width = data.width;
  canvas.height = data.height - 10;
  const ctx = canvas.getContext('2d');
  ctx.putImageData(data, 0, 0);
}
