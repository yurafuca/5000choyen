/* globals Canvas */
var _canvas = null;

window.onload = function () {
  var canvas = document.getElementById("canvas");
  _canvas = new Canvas(canvas);

  var radios = document.querySelectorAll('input[type=radio][name="text-order"]');
  Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener('change', onToggle1);
  });

  var radios = document.querySelectorAll('input[type=radio][name="background-order"]');
  Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener('change', onToggle2);
  });
};

function onToggle1(e) {
  var textboxBottom = document.getElementById('textboxBottom');
  var labelBottom = document.getElementById('labelBottom');
  
  if (this.value === 'image') {
    textboxBottom.style.display = "none";
    labelBottom.style.display = "none";
    _canvas.redrawImage();
  } else {
    textboxBottom.style.display = "inline";
    labelBottom.style.display = "inline";
    _canvas.redrawBottom();
  }
}

function onToggle2(e) {
  _canvas.redrawTop();
}

