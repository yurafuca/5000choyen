var fontA = new FontFaceObserver('notobk');
var fontB = new FontFaceObserver('notoserifbk');

Promise.all([fontA.load(), fontB.load()]).then(function () {
  const queries = window.location.href.split('?')[1];
  const params = {};

  queries.split('&').forEach(function(query) {
    const name = query.split('=')[0];
    const data = query.split('=')[1];
    params[name] = data;
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');
  ctx.canvas.height = Number(params.height);
  ctx.canvas.width = Number(params.width);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const drawer = new Drawer(ctx);

  drawer.redrawTop(decodeURI(params.top), Number(params.tx), Number(params.ty), params.color);
  if (params.order === `text`)
    drawer.redrawBottom(decodeURI(params.bottom), Number(params.bx), Number(params.by), params.color);
  else
    drawer.redrawImage(Number(params.bx), Number(params.by), params.color, function() {
      const result = document.getElementById('result');
      result.src = ctx.canvas.toDataURL("image/png");
      result2.src = ctx.canvas.toDataURL("image/png");
    });

  const result = document.getElementById('result');
  result.src = ctx.canvas.toDataURL("image/png");
  result2.src = ctx.canvas.toDataURL("image/png");
});
