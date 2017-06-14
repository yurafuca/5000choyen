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

function saveImage() {
  var a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.setAttribute("download", "image.png");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function redrawTop() {
  ctx.font = '100px notobk';

  ctx.clearRect(0, 0, canvas.width, canvas.height/2);
  var posx = 70;
  var posy = 100;
  var text = textboxes.top.value;

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

  redrawBottom();
}

function redrawBottom() {
  var offsetX = 250;
  var offsetY = 130;

  ctx.font = '100px yumindb';

  ctx.clearRect(0+offsetX, 0+offsetY, canvas.width, canvas.height/2);
  var posx = 70 + offsetX;
  var posy = 100 + offsetY;
  var text = textboxes.bottom.value;

  //黒色
  {
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 24;
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
    ctx.lineWidth = 21;
    ctx.strokeText(text, posx + 5, posy + 2);
  }

  // 紺
  {
    ctx.strokeStyle = "#10193A";
    ctx.lineWidth = 21;
    ctx.strokeText(text, posx, posy);
  }

  // 白
  {
    ctx.strokeStyle = "#DDD";
    ctx.lineWidth = 14;
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
    ctx.lineWidth = 13;
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
    ctx.lineWidth = 5;
    ctx.strokeStyle = grad;
    ctx.strokeText(text, posx, posy - 3);
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
}
