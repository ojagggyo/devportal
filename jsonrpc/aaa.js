const Koa = require('koa')
const {JsonRpc} = require('@steemit/koa-jsonrpc')

const rpc = new JsonRpc()
rpc.register('my_method', async (a, b) => {
    return a + b
})

const app = new Koa()
app.use(rpc.middleware)
app.listen(8088)
