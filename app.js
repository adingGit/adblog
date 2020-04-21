const Koa = require('koa')
const cors = require('koa2-cors');
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

import bodyParser from 'koa-bodyparser'; // 处理post请求
import json from 'koa-json' // 美化json
import article from './server/interface/article' // 用户接口
const app = new Koa()
app.use(cors());

// 处理扩展类型
app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))

// json 美化
app.use(json()); 

// Import and Set Nuxt.js options
const config = require('./nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // 路由设置
  app.use(article.routes()).use(article.allowedMethods());

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
