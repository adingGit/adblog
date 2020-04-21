<template>
  <div class="container">
    <div class="nav-menu">
      <el-menu
        :collapse="isCollapse"
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleMenuSelect">
        <el-menu-item index="collapseControl" v-show="isCollapse">
          <i :class="$t('expandIcon')"></i>
          <span slot="title">{{$t('expand')}}</span>
        </el-menu-item>
        <el-menu-item index="collapseControl" v-show="!isCollapse">
          <i :class="$t('collapseIcon')"></i>
          <span slot="title">{{$t('collapse')}}</span>
        </el-menu-item>
        <el-menu-item index="adingBlog">
          <i :class="$t('kdcloudBlog.icon')"></i>
          <span slot="title">{{$t('kdcloudBlog.name')}}</span>
        </el-menu-item>
        <el-menu-item v-for="(item, index) in $t('kdcloudMenus')" :index="index.toString()" :key="index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <article-list
        class="article-list"
        v-show="showBlog"
        :data-list="dataList"
        :tag-list="tagList"
        :total="total">
      </article-list>
      <template v-for="(item, index) in $t('kdcloudMenus')" >
        <iframe
          :key="index"
          :ref="'iframe'+index"
          v-show="index==showIndex"
          class="iframe"
          :data-url="item.iframeUrl">
        </iframe>
      </template>
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList';
import common  from '@/pages/common';

export default {
  name: 'kdcloud',
  components: {
    ArticleList
  },
  // 异步获取需要显示的数据，服务端渲染必须通过这个获取数据
  asyncData: common.getArticleList,
  data () {
    return {
      // 是否展开菜单
      isCollapse: true,
      // 是否显示阿丁博客列表
      showBlog: true,
      // 显示苍穹的序号
      showIndex: -1
    };
  },
  methods: {
    // 监听点击左边菜单栏
    handleMenuSelect (key) {
      if( key == 'collapseControl' ) {
        // 点击的是展开或收起
        this.isCollapse = !this.isCollapse;
      } else if ( key == 'adingBlog' ) {
        // 点击阿丁博客
        this.showBlog = true;
        this.showIndex = -1;
      } else {
        // 点击苍穹相关的api
        let iframe = this.$refs['iframe'+key][0];
        this.showIndex = key;
        this.showBlog = false;
        if( iframe.src == "" ) {
          iframe.src = iframe.dataset.url;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100% ;
    margin: 52px 0 0 0 !important;
    padding: 0;
    display: flex;
    flex-direction: row;
    .nav-menu {
      .el-menu {
        height: 100%;
        &:not(.el-menu--collapse) {
          min-width: 160px;
        }
      }
    }
    .content {
      flex-grow: 1;
      .article-list {
        margin: 20px auto 10px auto !important;
        min-width: 1000px;
        width: 90%;
      }
      .iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
  }
</style>