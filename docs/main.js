var canvas;
var ctx;
var offset      = { top: { x: 0, y: 0}, bottom: { x: 250, y: 130} };
var actualWidth = { top: 0, bottom: 0 };
var textBoxes   = { top: null, bottom: null };
var dragging    = false;
var drag        = { x0: 0, y0: 0 };
var onBottom    = false;

window.onload = function () {
  canvas = document.getElementById("canvas");
  canvas.addEventListener('mousedown', onDown, false);
  canvas.addEventListener('mousemove', onMove, false);
  canvas.addEventListener('mouseup', onUp, false);
  textBoxes.top = document.getElementById("textboxTop");
  textBoxes.bottom = document.getElementById("textboxBottom");
  ctx = canvas.getContext('2d');
  ctx.lineJoin = 'round';
  ctx.fillStyle = 'white';

  var radios = document.querySelectorAll('input[type=radio][name="draw_mode"]');
  Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener('change', changeHandler);
  });
};

function onDown(e) {
  dragging = true;
  drag.x0 = e.clientX;
  drag.y0 = e.clientY;
}

function onMove(e) {
  if (dragging) {
    var dx = e.clientX - drag.x0;
    var dy = e.clientY - drag.y0;
    var x = offset.bottom.x + dx;
    if (getDrawMode() === "image") {
      redrawImage(x);
    } else {
      redrawBottom(x);
    }
  }
  if (canvas.getBoundingClientRect().top + offset.bottom.y <= e.clientY
      && e.clientY <= canvas.getBoundingClientRect().top + 290) {
    document.body.style.cursor = "move";
  } else {
    document.body.style.cursor = "default"
  }
}

function onUp(e) {
  dragging = false;
  var dx = e.clientX - drag.x0;
  offset.bottom.x += dx;
}

function changeHandler(e) {
  if (this.value === 'image') {
    document.getElementById('textboxBottom').style.display = "none";
    document.getElementById('labelBottom').style.display = "none";
    redrawImage();
    redrawImage();
  } else {
    document.getElementById('textboxBottom').style.display = "inline";
    document.getElementById('labelBottom').style.display = "inline";
    redrawBottom();
  }
    if (getDrawMode() === "image") {
    redrawImage();
  } else {
    redrawBottom();
  }
}

function getDrawMode() {
  var drawMode = document.querySelector('input[name="draw_mode"]:checked').value;
  return drawMode;
}

function saveImage() {
  const width = Math.max(actualWidth.top, actualWidth.bottom);
  var imageData = ctx.getImageData(0, 0, width, canvas.height);
  saveImageData(imageData);
}

function saveImageData(imagedata) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = imagedata.width;
    canvas.height = imagedata.height;
    ctx.putImageData(imagedata, 0, 0);

    var a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.setAttribute("target", "_blank");
    document.body.appendChild(a);
    a.click();
}

function redrawTop() {
  ctx.setTransform(1,0,-0.4,1,0,0);
  ctx.font = '100px notobk';

  ctx.clearRect(0, 0, canvas.width, canvas.height/2);
  var posx = 70;
  var posy = 100;
  var text = textBoxes.top.value;

    //黒色
    {
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 22;
      ctx.strokeText(text, posx + 4, posy + 4);
    }

  //銀色
  {
    var grad = ctx.createLinearGradient(0, 24, 0, 122);
    grad.addColorStop(0.0, 'rgb(0,15,36)');
    grad.addColorStop(0.10, 'rgb(255,255,255)');
    grad.addColorStop(0.18, 'rgb(55,58,59)');
    grad.addColorStop(0.25, 'rgb(55,58,59)');
    grad.addColorStop(0.5, 'rgb(200,200,200)');
    grad.addColorStop(0.75, 'rgb(55,58,59)');
    grad.addColorStop(0.85, 'rgb(25,20,31)');
    grad.addColorStop(0.91, 'rgb(240,240,240)');
    grad.addColorStop(0.95, 'rgb(166,175,194)');
    grad.addColorStop(1, 'rgb(50,50,50)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 20;
    ctx.strokeText(text, posx + 4, posy + 4);
  }

  //黒色
  {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 16;
    ctx.strokeText(text, posx, posy);
  }

  //金色
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(253,241,0)');
    grad.addColorStop(0.25, 'rgb(245,253,187)');
    grad.addColorStop(0.4, 'rgb(255,255,255)');
    grad.addColorStop(0.75, 'rgb(253,219,9)');
    grad.addColorStop(0.9, 'rgb(127,53,0)');
    grad.addColorStop(1, 'rgb(243,196,11)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 10;
    ctx.strokeText(text, posx, posy);
  }

  //黒
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#000';
  ctx.strokeText(text, posx+2, posy - 3);

  //白
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#FFFFFF';
  ctx.strokeText(text, posx, posy - 3);

  //赤
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(255, 100, 0)');
    grad.addColorStop(0.5, 'rgb(123, 0, 0)');
    grad.addColorStop(0.51, 'rgb(240, 0, 0)');
    grad.addColorStop(1, 'rgb(5, 0, 0)');
    ctx.lineWidth = 4;
    ctx.strokeStyle = grad;
    ctx.strokeText(text, posx, posy - 3);
  }

  //赤
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(230, 0, 0)');
    grad.addColorStop(0.5, 'rgb(123, 0, 0)');
    grad.addColorStop(0.51, 'rgb(240, 0, 0)');
    grad.addColorStop(1, 'rgb(5, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillText(text, posx, posy - 3);
  }

  actualWidth.top = ctx.measureText(text).width + posx;

  if (getDrawMode() === "image") {
    redrawImage();
  } else {
    redrawBottom();
  }
}

function redrawBottom(offsetX) {
  var offsetX = offsetX || offset.bottom.x;
  var offsetY = offset.bottom.y;

  ctx.setTransform(1, 0, -0.4, 1, 0, 0);
  ctx.font = '100px notoserifbk';

  ctx.clearRect(0, 130, canvas.width, canvas.height/2);
  var posx = 70 + offsetX;
  var posy = 100 + offsetY;
  var text = textBoxes.bottom.value;

  //黒色
  {
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 22;
    ctx.strokeText(text, posx + 5, posy + 2);
  }

  // 銀
  {
    var grad = ctx.createLinearGradient(0+offsetX, 20+offsetY, 0+offsetX, 118+offsetY);
    grad.addColorStop(0, 'rgb(0,15,36)');
    grad.addColorStop(0.25, 'rgb(250,250,250)');
    grad.addColorStop(0.5, 'rgb(150,150,150)');
    grad.addColorStop(0.75, 'rgb(55,58,59)');
    grad.addColorStop(0.85, 'rgb(25,20,31)');
    grad.addColorStop(0.91, 'rgb(240,240,240)');
    grad.addColorStop(0.95, 'rgb(166,175,194)');
    grad.addColorStop(1, 'rgb(50,50,50)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 19;
    ctx.strokeText(text, posx + 5, posy + 2);
  }

  //黒色
  {
    ctx.strokeStyle = "#10193A";
    ctx.lineWidth = 17;
    ctx.strokeText(text, posx, posy);
  }

  // 白
  {
    ctx.strokeStyle = "#DDD";
    ctx.lineWidth = 8;
    ctx.strokeText(text, posx, posy);
  }


  //紺
  {
    var grad = ctx.createLinearGradient(0+offsetX, 20+offsetY, 0+offsetX, 100+offsetY);
    grad.addColorStop(0, 'rgb(16,25,58)');
    grad.addColorStop(0.03, 'rgb(255,255,255)');
    grad.addColorStop(0.08, 'rgb(16,25,58)');
    grad.addColorStop(0.2, 'rgb(16,25,58)');
    grad.addColorStop(1, 'rgb(16,25,58)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 7;
    ctx.strokeText(text, posx, posy);
  }


  //銀
  {
    var grad = ctx.createLinearGradient(0+offsetX, 20+offsetY, 0+offsetX, 100+offsetY);
    grad.addColorStop(0, 'rgb(245,246,248)');
    grad.addColorStop(0.15, 'rgb(255,255,255)');
    grad.addColorStop(0.35, 'rgb(195,213,220)');
    grad.addColorStop(0.5, 'rgb(160,190,201)');
    grad.addColorStop(0.51, 'rgb(160,190,201)');
    grad.addColorStop(0.52, 'rgb(196,215,222)');
    grad.addColorStop(1.0, 'rgb(255,255,255)');
    ctx.fillStyle = grad;
    ctx.fillText(text, posx, posy - 3);
  }

  // textWidth = Math.maox(ctx.measureText(text).width+offsetX, textWidth+offsetX);
  actualWidth.bottom = ctx.measureText(text).width + posx;

}

function redrawImage(offsetX) {
  var offsetX = offsetX || offset.bottom.x;
  var offsetY = offset.bottom.y;
  var posx = 70 + offsetX;
  var posy = 0 + offsetY;
  ctx.clearRect(0, 130, canvas.width, canvas.height/2);

  var image = new Image();
  image.onload = function() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(image, posx + 5, posy + 2);
  }
  image.src = "hoshii.png";
}
