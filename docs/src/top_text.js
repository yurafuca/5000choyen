function TopText(ctx) {

    this.value = "";
    this.font = "";
    this.x = 70.0;
    this.y = 100.0;
    this.w = 0.0;
    this.ctx = ctx;
}

TopText.prototype.draw = function() {
    this.ctx.font = this.font;
    this.ctx.setTransform(1, 0, -0.45, 1, 0, 0);

    //黒色
    {
        this.ctx.strokeStyle = "#000";
        this.ctx.lineWidth = 22;
        this.ctx.strokeText(this.value, this.x + 4, this.y + 4);
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
        this.ctx.strokeText(this.value, this.x + 4, this.y + 4);
    }

    //黒色
    {
        this.ctx.strokeStyle = "#000000";
        this.ctx.lineWidth = 16;
        this.ctx.strokeText(this.value, this.x, this.y);
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
        this.ctx.strokeText(this.value, this.x, this.y);
    }

    //黒
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#000';
    this.ctx.strokeText(this.value, this.x + 2, this.y - 3);

    //白
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.strokeText(this.value, this.x, this.y - 3);

    //赤
    {
        const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0, 'rgb(255, 100, 0)');
        grad.addColorStop(0.5, 'rgb(123, 0, 0)');
        grad.addColorStop(0.51, 'rgb(240, 0, 0)');
        grad.addColorStop(1, 'rgb(5, 0, 0)');
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = grad;
        this.ctx.strokeText(this.value, this.x, this.y - 3);
    }

    //赤
    {
        const grad = this.ctx.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0, 'rgb(230, 0, 0)');
        grad.addColorStop(0.5, 'rgb(123, 0, 0)');
        grad.addColorStop(0.51, 'rgb(240, 0, 0)');
        grad.addColorStop(1, 'rgb(5, 0, 0)');
        this.ctx.fillStyle = grad;
        this.ctx.fillText(this.value, this.x, this.y - 3);
    }

    this.w = this.ctx.measureText(this.value).width + 30;
}
