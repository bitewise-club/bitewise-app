require("@babel/polyfill");
require('dotenv').config();
const Koa = require('koa');
const next = require('next');
const session = require('koa-session');
const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = new Koa();
    server.use(session(server));

    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        ctx.res.statusCode = 200;
        return
    });

    server.listen(port, () => {
        console.log(`>Ready on http://localhost:${port}`);
    })
});