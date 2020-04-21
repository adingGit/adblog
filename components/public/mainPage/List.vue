<template>
  <div class="list-wrap">
    <div class="list-title">
      <i class="iconfont icon-arrow"></i>
      <h2 class="title"><nuxt-link :to="'/detail/'+ dataInfo._id">{{dataInfo.name}}</nuxt-link></h2>
    </div>
    <div class="list-info" v-html="dataInfo.summary">
      <!-- {{dataInfo.summary}} -->
    </div>
    <div class="list-more">
      <nuxt-link :to="'/detail/'+ dataInfo._id">阅读更多>></nuxt-link>
    </div>
    <div class="list-tip">
      <span  class="iconfont icon-user"><nuxt-link to="/aboutme">{{dataInfo.releaseFor}}</nuxt-link></span>
      <span class="iconfont icon-time"><a href="">{{dataInfo.releaseDate.slice(0, 10)}}</a></span>
      <span class="iconfont icon-tag-line"><a href="">{{dataInfo.classification}}</a></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    dataInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      id: 1
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/css/public/list.scss'
</style>