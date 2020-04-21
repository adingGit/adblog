<template>
  <div class="type-page">
    <article-list
      :data-list="dataList"
      :tag-list="tagList"
      :total="total">
    </article-list>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList';
import common  from '@/pages/common';
export default {
  name: 'MyFrontPage',
  components: {
    ArticleList
  },
  // 异步获取需要显示的数据，服务端渲染必须通过这个获取数据
  asyncData: common.getArticleList
}
</script>

<style lang="scss" scoped>
  .type-page {
    flex-grow: 1;
    min-width: 1000px;
    width: 88%;
    margin: 75px auto 20px auto;
    display: flex;
  }
</style>