<template>
  <div class="tag-title">
    <span>{{tagTitle}}</span>
  </div>
</template>
<script>
export default {
  name: 'TagTitle',
  props: {
    tagTitle: {
      type: String,
      default() {
        return '热门标签'
      } 
    }
  }
}
</script>
<style lang="scss" scoped>
  .tag-title {
    height: 44px;
    line-height: 44px;
    width: 100%;
    text-align: center;
    background-color: #fbfbfb;
    border-bottom: 1px solid #eee;
  }
</style>