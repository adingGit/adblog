<template>
  <div class="tag-list-wrap">
    <tag-title tagTitle="归档"></tag-title>
    <archive-list></archive-list>
  </div>
</template>
<script>
import TagTitle from './sub/Title'
import ArchiveList from './sub/List'
export default {
  name: 'TagList',
  components: {
    TagTitle,
    ArchiveList
  },
}
</script>
<style lang="scss" >
  .tag-list-wrap {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 20px;
  }
</style>