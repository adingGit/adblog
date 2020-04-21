<template>
    <ul class="nav">
      <li class="nav-list" v-for="(item, index) in menuList" :key="index" >
        <nuxt-link class="link" :to="item.path">{{item.name}}</nuxt-link>
      </li>
    </ul>
</template>
<script>
export default {
  name: 'MenuList',
  props: {
    menuList: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="scss" scoped>
    .nav {
      display: flex;
      text-align: center;
      justify-content: center;
      width: 100%;
      .nav-list {
        width: 70px;
        height: 100%;
        min-width: 50px;
        a {
          color: #fff;
          width: 100%;
          display: block;
        }
        a:hover {
          color: #eee;
          background-color: #70dcf1;
        }
        a.nuxt-link-exact-active{
          background-color: #09c7ecbf;
        }
        // a.nuxt-link-active{
        //   background-color: #09c7ecbf;
        // }
      }
    }
</style>