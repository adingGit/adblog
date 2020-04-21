import HTTP from '../utils/http'

 export default class ArticleModel extends HTTP {
  
  getArticleList (type="", keyword="", currentPage=1, pageSize=5) {
    return new Promise ((resolve, reject) =>{
      this.axiosPost({
        url: '/article/getArticleList',
        data: {
          type,
          keyword,
          currentPage,
          pageSize
        },
        success (data) {
          resolve(data);
        },
        error (err) {
          reject(err);
        }
      })
    })
  }
  
  getArticleDetailList (_id) {
    return new Promise ((resolve, reject) =>{
      this.axiosPost({
        url: '/article/getArticleDetailList',
        data: {
          _id
        },
        success (data) {
          resolve(data);
        },
        error (err) {
          reject(err);
        }
      })
    })
  }
  getTagList () {
    return new Promise ((resolve, reject) =>{
      this.axiosPost({
        url: '/article/getTagList',
        success (data) {
          resolve(data);
        },
        error (err) {
          reject(err);
        }
      })
    })
  }
}
