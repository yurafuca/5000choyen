var Logo = function() {
  this._logo = new Image();
};

Logo.prototype.setSrc = function(src) {
  this._logo.src = src;
}

Logo.prototype.isLoaded = function() {
  if (!this._logo.complete) return false;
  if (typeof this._logo.naturalWidth !== "undefined" && this._logo.naturalWidth === 0) return false;
  return true;
}

Logo.prototype.drawTo = function(ctx, x, y) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(this._logo, x + 5, y + 2);
}