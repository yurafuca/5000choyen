/* globals Events, Canvas, Image, DrawMode */

var _canvas = null;

window.onload = function () {
  var canvas = document.getElementById("canvas");
  _canvas = new Canvas(canvas);
  var radios = document.querySelectorAll('input[type=radio][name="draw_mode"]');
  Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener('change', onToggle);
  });
};

function redrawTop() {
  _canvas.redrawTop();
}

function redrawBottom() {
  _canvas.redrawBottom();
}

function save() {
  _canvas.save();
}

function onToggle(e) {
  var textboxBottom = document.getElementById('textboxBottom');
  var labelBottom = document.getElementById('labelBottom');
  if (this.value === 'image') {
    textboxBottom.style.display = "none";
    labelBottom.style.display = "none";
    Canvas.redrawImage();
    _canvas.redrawImage();
  } else {
    textboxBottom.style.display = "inline";
    labelBottom.style.display = "inline";
    _canvas.redrawBottom();
  }
  if (_canvas.drawMode() === "image") {
    _canvas.redrawImage();
  } else {
    _canvas.redrawBottom();
  }
}

function isLoaded(image) {
  if (!image.complete) {
    return false;
  }
  if (typeof image.naturalWidth !== "undefined" && image.naturalWidth === 0) {
    return false;
  }
  return true;
}
