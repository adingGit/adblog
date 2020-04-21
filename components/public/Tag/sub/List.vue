<template>
  <div class="tag-list">
    <ul>
      <li class="list-item"><nuxt-link to="/">2019年9月29日</nuxt-link></li>
      <li class="list-item"><nuxt-link to="/">2019年9月29日</nuxt-link></li>
      <li class="list-item"><nuxt-link to="/">2019年9月29日</nuxt-link></li>
      <li class="list-item"><nuxt-link to="/">2019年9月29日</nuxt-link></li>
      <li class="list-item"><nuxt-link to="/">2019年9月29日</nuxt-link></li>
      <li class="list-item"><nuxt-link to="/">2019年9月29日</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ArchiveList'
}
</script>
<style lang="scss" scoped>
  .tag-list {
    width: 100%;
    min-height: 200px;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    .list-item {
      line-height: 30px;
      font-size: 14px;
      >a {
        color: #424242;
      }
      >a:hover {
        color: rgb(87, 168, 87);
      }
    }
  }
</style>