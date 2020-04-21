<template>
  <div class="container">
    <div class="left-wrap">
      <h2 :class="[title ? 'left-title' : '']">{{title}}</h2>
      <list v-for="(item,index) in list" :key="index" :dataInfo="item"></list>
    </div>
    <div class="right-wrap">
      <tag-block></tag-block>
      <tag-list></tag-list>
      <tag-block></tag-block>
      <tag-block></tag-block>
      <tag-block></tag-block>
    </div>
  </div>
</template>

<script>
import List from '../public/mainPage/List'
import TagBlock from './Tag/TagBlock'
import TagList from './Tag/TagList'
export default {
  name: 'Front',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    }
  },
  components: {
    List,
    TagBlock,
    TagList
  }
}
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
