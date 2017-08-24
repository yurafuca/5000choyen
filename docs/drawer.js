/* globals SETTINGS, Hoshii, Generator */
const generator = new Generator();
var Drawer = function() {
  this.actualWidth = {
    top: 0,
    bottom: 0
  };
  this.offset = {
    top: {
      x: 0,
      y: 0
    },
    bottom: {
      x: 250,
      y: 130
    }
  };
  this.logo = new Hoshii();
  this.logo.setSrc(`hosii.png`);
}

Drawer.prototype.redrawTop = function(text) {
  this.ctx.setTransform(1, 0, -0.4, 1, 0, 0);
  this.ctx.font = '100px notobk';

  const posx = 70;
  const posy = 100;

  const order = SETTINGS.BACKGROUND_ORDER;
  switch(order) {
    case `white`:
      this.ctx.fillStyle = `white`;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height / 2);
      break;
    case `transparent`:
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height / 2);
      break;
  }
  
  //黒色 
  {
    this.ctx.strokeStyle = "#000";
    this.ctx.lineWidth = 22;
    this.ctx.strokeText(text, posx + 4, posy + 4);
  }

  //銀色 
  {
    const grad = this.ctx.createLinearGradient(0, 24, 0, 122);
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
    this.ctx.strokeStyle = grad;
    this.ctx.lineWidth = 20;
    this.ctx.strokeText(text, posx + 4, posy + 4);
  }

  //黒色 
  {
    this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 16;
    this.ctx.strokeText(text, posx, posy);
  }

  //金色 
  {
    const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(253,241,0)');
    grad.addColorStop(0.25, 'rgb(245,253,187)');
    grad.addColorStop(0.4, 'rgb(255,255,255)');
    grad.addColorStop(0.75, 'rgb(253,219,9)');
    grad.addColorStop(0.9, 'rgb(127,53,0)');
    grad.addColorStop(1, 'rgb(243,196,11)');
    this.ctx.strokeStyle = grad;
    this.ctx.lineWidth = 10;
    this.ctx.strokeText(text, posx, posy);
  }

  //黒 
  this.ctx.lineWidth = 6;
  this.ctx.strokeStyle = '#000';
  this.ctx.strokeText(text, posx + 2, posy - 3);

  //白 
  this.ctx.lineWidth = 6;
  this.ctx.strokeStyle = '#FFFFFF';
  this.ctx.strokeText(text, posx, posy - 3);

  //赤 
  {
    const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(255, 100, 0)');
    grad.addColorStop(0.5, 'rgb(123, 0, 0)');
    grad.addColorStop(0.51, 'rgb(240, 0, 0)');
    grad.addColorStop(1, 'rgb(5, 0, 0)');
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = grad;
    this.ctx.strokeText(text, posx, posy - 3);
  }

  //赤 
  {
    const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(230, 0, 0)');
    grad.addColorStop(0.5, 'rgb(123, 0, 0)');
    grad.addColorStop(0.51, 'rgb(240, 0, 0)');
    grad.addColorStop(1, 'rgb(5, 0, 0)');
    this.ctx.fillStyle = grad;
    this.ctx.fillText(text, posx, posy - 3);
  }

  this.actualWidth.top = this.ctx.measureText(text).width + posx;

  if (SETTINGS.TEXT_ORDER === "image") {
    this.redrawImage();
  } else {
    this.redrawBottom();
  }
}


Drawer.prototype.drawBottom = function(text, offsetX) {
  offsetX = offsetX || this.offset.bottom.x;
  var offsetY = this.offset.bottom.y;

  this.ctx.setTransform(1, 0, -0.4, 1, 0, 0);
  this.ctx.font = '100px notoserifbk';

  var order = SETTINGS.BACKGROUND_ORDER;
  if (order === `white`) {
    this.ctx.fillStyle = order;
    this.ctx.fillRect(0, 130, this.canvas.width, this.canvas.height / 2);
  } else if (order === `transparent`) {
    this.ctx.clearRect(0, 130, this.canvas.width, this.canvas.height / 2);
  }

  // 全角 `!` は見栄えをよくするために半角に置換する．
  var posx = 70 + offsetX;
  var posy = 100 + offsetY;

  //黒色 
  {
    this.ctx.strokeStyle = "#000";
    this.ctx.lineWidth = 22;
    this.ctx.strokeText(text, posx + 5, posy + 2);
  }

  // 銀 
  {
    const grad = this.ctx.createLinearGradient(
      0 + offsetX,
      20 + offsetY,
      0 + offsetX,
      118 + offsetY
    );
    grad.addColorStop(0, 'rgb(0,15,36)');
    grad.addColorStop(0.25, 'rgb(250,250,250)');
    grad.addColorStop(0.5, 'rgb(150,150,150)');
    grad.addColorStop(0.75, 'rgb(55,58,59)');
    grad.addColorStop(0.85, 'rgb(25,20,31)');
    grad.addColorStop(0.91, 'rgb(240,240,240)');
    grad.addColorStop(0.95, 'rgb(166,175,194)');
    grad.addColorStop(1, 'rgb(50,50,50)');
    this.ctx.strokeStyle = grad;
    this.ctx.lineWidth = 19;
    this.ctx.strokeText(text, posx + 5, posy + 2);
  }

  //黒色 
  {
    this.ctx.strokeStyle = "#10193A";
    this.ctx.lineWidth = 17;
    this.ctx.strokeText(text, posx, posy);
  }

  // 白 
  {
    this.ctx.strokeStyle = "#DDD";
    this.ctx.lineWidth = 8;
    this.ctx.strokeText(text, posx, posy);
  }

  //紺 
  {
    const grad = this.ctx.createLinearGradient(
      0 + offsetX,
      20 + offsetY, 
      0 + offsetX,
      100 + offsetY
    );
    grad.addColorStop(0, 'rgb(16,25,58)');
    grad.addColorStop(0.03, 'rgb(255,255,255)');
    grad.addColorStop(0.08, 'rgb(16,25,58)');
    grad.addColorStop(0.2, 'rgb(16,25,58)');
    grad.addColorStop(1, 'rgb(16,25,58)');
    this.ctx.strokeStyle = grad;
    this.ctx.lineWidth = 7;
    this.ctx.strokeText(text, posx, posy);
  }

  //銀 
  {
    const grad = this.ctx.createLinearGradient(
      0 + offsetX,
      20 + offsetY,
      0 + offsetX,
      100 + offsetY
    );
    grad.addColorStop(0, 'rgb(245,246,248)');
    grad.addColorStop(0.15, 'rgb(255,255,255)');
    grad.addColorStop(0.35, 'rgb(195,213,220)');
    grad.addColorStop(0.5, 'rgb(160,190,201)');
    grad.addColorStop(0.51, 'rgb(160,190,201)');
    grad.addColorStop(0.52, 'rgb(196,215,222)');
    grad.addColorStop(1.0, 'rgb(255,255,255)');
    this.ctx.fillStyle = grad;
    this.ctx.fillText(text, posx, posy - 3);
  }

  this.actualWidth.bottom = this.ctx.measureText(text).width + posx;
}

Drawer.prototype.redrawImage = function(offsetX) {
  offsetX = offsetX || this.offset.bottom.x;
  var offsetY = this.offset.bottom.y;
  var posx = 70 + offsetX;
  var posy = 0 + offsetY;

  var order = SETTINGS.BACKGROUND_ORDER;
  if (order === `white`) {
    this.ctx.fillStyle = `white`;
    this.ctx.fillRect(0, 130, this.canvas.width, this.canvas.height / 2);
  } else if (order === `transparent`) {
    this.ctx.clearRect(0, 130, this.canvas.width, this.canvas.height / 2);
  }

  if (this.logo.isLoaded()) {
    this.logo.drawTo(this.ctx, posx, posy);
  } else {
    this.logo.onload = function() { this.logo.drawTo(this.ctx, posx, posy) }
  }

  this.actualWidth.bottom = 370 + posx;
}

Drawer.prototype.save = function() {
  const width = Math.max(this.actualWidth.top, this.actualWidth.bottom);
  const height = this.canvas.height;
  generator.save(this.canvas, width, height);
}
