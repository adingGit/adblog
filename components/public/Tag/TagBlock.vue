<template>
  <div class="tag-wrap">
    <tag-title :tagTitle="$t('myLabel')"></tag-title>
    <block :tagList="tagList"></block>
  </div>
</template>
<script>
import TagTitle from './sub/Title'
import Block from './sub/Block'
export default {
  name: 'TagBlock',
  components: {
    TagTitle,
    Block
  },
  props: {
    tagList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // tagList: [{
      //   id: '1',
      //   name: 'HTML'
      // },{
      //   id: '2',
      //   name: 'CSS'
      // },{
      //   id: '3',
      //   name: 'JavaScript'
      // },{
      //   id: '4',
      //   name: 'Node'
      // },{
      //   id: '5',
      //   name: 'MySQL'
      // }]
    }
  }
}
</script>
<style lang="scss" >
  .tag-wrap {
    width: 100%;
    min-height: 200px;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 20px;
  }
</style>
