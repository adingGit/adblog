import ArticleModel from '@/models/Article';
const articleModel = new ArticleModel();

export default {
  // 页面加载的时候获取数据，如果是首次加载则是在服务端运行，否则会在客户端运行
  getArticleList: async function (ctx) {
    let types = ctx.params.type,
        routePath = ctx.route.path,
        keyword = '',
        type = '',
        currentPage = 1,
        pageSize = 10;
    
    // console.log('types=', types, ctx.params, ctx.route.path);

    switch (routePath) {
      case '/':
        // 首页
        type = '';
        break;
      case '/type/kdcloud':
        // 苍穹
        type = '云苍穹';
        break;
      default:
        if (types.indexOf('tag') !== -1) {
          type = types.slice(4);
        }else if (types.indexOf('key') !== -1) {
          keyword = types.slice(4);
        }else {
          type = types;
        }
        break;
    }
    // console.log('type', type);
    // 获取文章列表
    let {status, data: {data}} = await articleModel.getArticleList(type, keyword, currentPage, pageSize);
    // 获取标签列表
    let {status: statusTag, data: tagData} = await articleModel.getTagList();
		if (status === 200  && statusTag == 200) {
			return {
        dataList: data.data,
        total: data.total,
        tagList: tagData.data.data.filter((item) => item._id !== null)
			}
		}
  }
}