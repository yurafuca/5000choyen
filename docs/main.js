var canvases = {
  top: null,
  bototm: null
};

var canvas;

var ctxs = {
  top: null,
  bottom: null
};

var textboxes = {
  top: null,
  bottom: null
};

window.onload = function () {
  canvas = document.getElementById("canvas");
  textboxes.top = document.getElementById("textboxTop");
  textboxes.bottom = document.getElementById("textboxBottom");
  ctx = canvas.getContext('2d');
  ctx.lineJoin = 'round';
  ctx.setTransform(1,0,-0.4,1,0,0);
};

function saveImage(){
    var data = canvas.toDataURL("image/png");
    window.open(data);
}

function redrawTop() {
  ctx.font = '100px mplus';

  ctx.clearRect(0, 0, canvas.width, canvas.height/2);
  var posx = 70;
  var posy = 100;
  var text = textboxes.top.value;

  //銀色
  for (var i = 0; i < 10; i++) {
    {
      var grad = ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(' + 10 * i + ', ' + 10 * i + ', ' + 10 * i + ')');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 28;
      ctx.strokeText(text, posx - 3 + i, posy + 2);
    }
  }

  //黒色
  {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 22;
    ctx.strokeText(text, posx, posy);
  }

  //金色
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0.3, 'rgb(255, 255, 255)');
    grad.addColorStop(0.5, 'rgb(240, 180, 5)');
    grad.addColorStop(0.8, 'rgb(89, 33, 0)');
    grad.addColorStop(1, 'rgb(240, 180, 5)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 19;
    ctx.strokeText(text, posx, posy);
  }

  //白
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#FFFFFF';
  ctx.strokeText(text, posx, posy - 3);

  //赤
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(230, 0, 0)');
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

  redrawBottom();
}

function redrawBottom() {
  var offsetX = 250;
  var offsetY = 130;

  ctx.font = '100px ipaexm';

  ctx.clearRect(0+offsetX, 0+offsetY, canvas.width, canvas.height/2);
  var posx = 70 + offsetX;
  var posy = 100 + offsetY;
  var text = textboxes.bottom.value;

  //銀色
  for (var i = 0; i < 10; i++) {
    {
      var grad = ctx.createLinearGradient(0+offsetX, 20+offsetY, 0+offsetX, 100+offsetY);
      grad.addColorStop(0, 'rgb(' + 10 * i + ', ' + 10 * i + ', ' + 10 * i + ')');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 28;
      ctx.strokeText(text, posx - 3 + i, posy + 2);
    }
  }

  //黒色
  {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 22;
    ctx.strokeText(text, posx, posy);
  }
  //金色
  {
    var grad = ctx.createLinearGradient(0+offsetX, 20+offsetY, 0+offsetX, 100+offsetY);
    grad.addColorStop(0.3, 'rgb(214, 220, 227)');
    grad.addColorStop(0.5, 'rgb(218, 224, 232)');
    grad.addColorStop(0.8, 'rgb(207, 207, 209)');
    grad.addColorStop(1, 'rgb(127,127,128)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 19;
    ctx.strokeText(text, posx, posy);
  }

  //白
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#10193A';
  ctx.strokeText(text, posx, posy - 3);

  //赤
  {
    var grad = ctx.createLinearGradient(0+offsetX, 20+offsetY, 0+offsetX, 100+offsetY);
    grad.addColorStop(0, 'rgb(192,204,217)');
    grad.addColorStop(0.05, 'rgb(212,220,228)');
    grad.addColorStop(0.15, 'rgb(241,242,243)');
    grad.addColorStop(0.23, 'rgb(241,242,243)');
    grad.addColorStop(0.5, 'rgb(190,190,190)');
    grad.addColorStop(0.51, 'rgb(220,220,221)');
    grad.addColorStop(0.52, 'rgb(220,220,220)');
    grad.addColorStop(1.0, 'rgb(239,240,242)');
    ctx.lineWidth = 4;
    ctx.strokeStyle = grad;
    ctx.strokeText(text, posx, posy - 3);
  }

  //赤
  {
    var grad = ctx.createLinearGradient(0+offsetX, 20+offsetY, 0+offsetX, 100+offsetY);
    grad.addColorStop(0, 'rgb(192,204,217)');
    grad.addColorStop(0.05, 'rgb(212,220,228)');
    grad.addColorStop(0.15, 'rgb(241,242,243)');
    grad.addColorStop(0.23, 'rgb(241,242,243)');
    grad.addColorStop(0.5, 'rgb(190,190,190)');
    grad.addColorStop(0.51, 'rgb(220,220,221)');
    grad.addColorStop(0.52, 'rgb(220,220,220)');
    grad.addColorStop(1.0, 'rgb(239,240,242)');
    ctx.fillStyle = grad;
    ctx.fillText(text, posx, posy - 3);
  }
}
