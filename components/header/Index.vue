<template>
  <div class="nav-bar">
    <h2 class="logo">{{$t('appOwner')+$t('appTitle')}}</h2>
    <div class="nav-menu">
      <menu-list :menuList="$t('navbar')"></menu-list>
    </div>
    <div class="nav-search">
      <input type="text" class="from-search" :placeholder="$t('pleaseEnterKeyword')" v-model="keyword">
      <button class="search-btn" @click="handleKeywordSearch">{{$t('search')}}</button>
      <el-select
        class="lang-select"
        size="mini"
        v-model="lang"
        @change="handleChangeLang">
        <el-option
          v-for="item in $t('langs')"
          :key="item.value"
          :label="item.name"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
import { mapMutations, mapGetters } from 'vuex'
import MenuList from './sub/MenuList'
export default {
  name: 'MyHeader',
  components: {
    MenuList
  },
  data() {
    return {
      keyword: '',
      navItem: '',
      lang: ''
    }
  },
  mounted () {
    this.lang = this.locale;
    let types = this.$route.params.type ? this.$route.params.type : '';
    if (types.indexOf('key') !== -1) {
      this.keyword = types.slice(4);
    }
  },
  computed: {
    ...mapGetters(['locale'])
  },
  methods: {
    ...mapMutations([
        'SET_LANG'
    ]),
    // 切换导航栏菜单
    handleClickNav (e) {
      this.navItem = this.$refs.navItem.children; //document.getElementsByClassName('nav-list');
      let tar = e.target.parentNode,
          tarIndex = Array.prototype.indexOf.call(this.navItem, tar);
      if (tar.className === 'nav-list') {
        for (let index = 0; index < this.navItem.length; index++) {
          const elem = this.navItem[index];
          elem.className = 'nav-list';
        }
        tar.className += ' current-nav-item';
      }
    },
    handleKeywordSearch () {
      // console.log(this.keyword);
      this.$router.push('/type/key-'+ this.keyword);
      // this.keyword = '';
    },

    handleChangeLang (lang) {
      // 设置当前页面语言
      this.$i18n.locale = lang;
      // 设置状态管理器里记录的语言
      this.SET_LANG(lang);
      // 保存到cookie，因为只有cookie可以被服务端渲染时获取。过期时间设置
      let seconds = 1*30*24*60*60;     // 过期时间 /秒 一个月
      let expires = new Date(new Date() * 1 + seconds * 1000);  
      Cookie.set('lang', lang, {expires: expires})
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/css/header/index.scss';
</style>