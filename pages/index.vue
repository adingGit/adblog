<template>
  <div class="container">
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
  name: 'IndexPage',
  components: {
    ArticleList
  },
  // 异步获取需要显示的数据，服务端渲染必须通过这个获取数据
  asyncData: common.getArticleList,
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-width: 1000px;
    width: 88%;
  }
</style>