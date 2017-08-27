var Hoshii = function() {
  this.self = new Image();
  this.self.src = `images/hoshii.png`;
};

Hoshii.prototype.isLoaded = function() {
  if (!this.self.complete) return false;
  if (typeof this.self.naturalWidth !== "undefined" && this.self.naturalWidth === 0) return false;
  return true;
}

Hoshii.prototype.drawTo = function(ctx, x, y) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(this.self, x + 5, y + 2);
}
