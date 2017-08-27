var Generator = function(ctx) {
  this.ctx = ctx;
}

Generator.prototype.save = function(width, height) {
  const data = this.ctx.getImageData(0, 0, width, height);
  const canvas = document.createElement('canvas');
  canvas.width = data.width;
  canvas.height = data.height - 10;

  const ctx = canvas.getContext('2d');
  ctx.putImageData(data, 0, 0);

  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.setAttribute("download", "result.png");
  document.body.appendChild(a);
  a.click();
}
