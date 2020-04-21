// 文章页面接口
import Router from 'koa-router'// 路由
import axios from './utils/axios' // 请求

//路由前缀
let router = new Router({
  prefix: '/article'
})

// 获取文章列表
router.post('/getArticleList', async (ctx) => {
  let {status, data} = await axios.post(`http://eu.weixiaolu.cn/service/?c=Knowledge-getKeywordList`, {
    type: ctx.request.body.type,
    keyword: ctx.request.body.keyword,
    currentPage: ctx.request.body.currentPage,
    pageSize: ctx.request.body.pageSize,
    releaseFor: '阿丁'
  });
  if (status === 200) {
    ctx.body = {
      data
    }
  }else {
    ctx.body = {
     data: []
    }
  }
})
// 获取文章详情列表
router.post('/getArticleDetailList', async (ctx) => {
  let {status, data} = await axios.post(`http://eu.weixiaolu.cn/service/?c=Knowledge-getDocumentById`, {
    _id: ctx.request.body._id
  });
  if (status === 200) {
    ctx.body = {
      data
    }
  }else {
    ctx.body = {
     data: []
    }
  }
})
// 获取标签列表
router.post('/getTagList', async (ctx) => {
  let {status, data} = await axios.post(`http://eu.weixiaolu.cn/service/?c=Knowledge-getTagList`, {
    releaseFor: '阿丁'
  });
  if (status === 200) {
    ctx.body = {
      data
    }
  }else {
    ctx.body = {
     data: []
    }
  }
})

export default router;