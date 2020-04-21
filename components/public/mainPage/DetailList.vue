<template>
  <div class="list-wrap">
    <div class="list-title">
      <i class="iconfont icon-arrow"></i>
      <h2 class="title">{{detailInfo.name}}</h2>
    </div>
    <div class="list-info" v-html="detailInfo.content">
    </div>
    <div class="list-tip">
      <span  class="iconfont icon-user"><a href="">{{detailInfo.releaseFor}}</a></span>
      <span class="iconfont icon-time"><a href="">{{detailInfo.releaseDate.slice(0, 10)}}</a></span>
      <span class="iconfont icon-tag-line"><a href="">{{detailInfo.classification}}</a></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      id: 1
    }
  },
  mounted() {
   // console.log('222',this.detailInfo)
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/css/public/detaiList.scss'
</style>