<template>
  <div class="article-list">
    <div class="left-wrap">
      <div class="left-list">
        <!-- <h2 :class="[title ? 'left-title' : '']">{{title}}</h2> -->
        <template v-if="articleList.length > 0">
          <list v-for="(item,index) in articleList" :key="index" :dataInfo="item"></list>
        </template>
        <template v-else>
          <div class="no-data">{{ $t('isNoData') }}</div>
        </template>
        
      </div>
      <pagination 
        :total="total"
        :pageSize="pageSize"
        v-model="currentPage">
      </pagination>
    </div>
    <div class="right-wrap">
      <tag-block :tagList="tagList"></tag-block>
      <!-- <tag-list></tag-list> -->
    </div>
  </div>
</template>

<script>
import MainPage from '@/components/public/mainPage'
import Pagination from '@/components/public/Pagination'
import List from '@/components/public/mainPage/List'
import TagBlock from '@/components/public/Tag/TagBlock'
import TagList from '@/components/public/Tag/TagList'
import ArticleModel from '@/models/Article'

const articleModel = new ArticleModel();
export default {
  name: 'MyFrontPage',
  components: {
    List,
    TagBlock,
    TagList,
    Pagination
  },
  props: {
    dataList: Array,
    tagList: Array,
    total: Number
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      articleList: []
    }
  },
  mounted () {
    this.articleList = this.dataList
  },
  watch: {
    async currentPage () {
      let types = this.$route.params.type,
          routePath = this.$route.path,
          keyword = '',
          type = '',
          pageSize = this.pageSize;
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
      let {status, data: {data}} = await articleModel.getArticleList(type, keyword, this.currentPage, this.pageSize); 
      if (status === 200) {
          this.articleList = data.data
      }
      window.scrollTo(0, 0);
    }
  },
}
</script>

<style lang="scss" scoped>
  .article-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    .left-wrap {
      flex-direction: column;
      background-color: #fff;
      flex: 3;
      display: flex;
      min-width: 700px; 
      min-height: calc(100vh - 161px);
      .left-list {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        .no-data {
          flex: 1;
          color: rgb(150, 147, 147);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 40px;
        }
      }
      .left-title {
        padding: 10px 0 0 20px;
        color: #444;
        margin-bottom: -25px;
      }
    }
    .right-wrap {
      min-width: 200px;
      margin-left: 20px;
      width: 300px;
    }
  }
</style>