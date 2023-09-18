const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const port = 3000;

// JSON-RPCメソッドの処理
app.use(bodyParser());

app.use(async (ctx) => {
  const { jsonrpc, method, params, id } = ctx.request.body;

  console.log( ctx.request );
  console.log( ctx.request.body );

  // リクエストがJSON-RPC 2.0仕様に従っているか確認
  if (jsonrpc !== '2.0' || !method || !id) {
    ctx.status = 400;
    ctx.body = { error: 'Invalid JSON-RPC request.' };
    return;
  }

  // メソッドの実行
  if (method === 'add') {
    var result = params.reduce((acc, val) => acc + val, 0);
    ctx.body = { jsonrpc: '2.0', result, id };
    return;
  }
  if (method === 'join') {
    var result = params.reduce((acc, val) => acc + "---" + val);
    ctx.body = { jsonrpc: '2.0', result, id };
    return;
  }
  if (method === 'json') {
    var { a, b, c} = params;
    var result = a;
    ctx.body = { jsonrpc: '2.0', result, id };
    return;
  }

  ctx.status = 404;
  ctx.body = { jsonrpc: '2.0', error: 'Method not found', id };
});

app.listen(port, () => {
  console.log(`JSON-RPC server is listening on port ${port}`);
});
