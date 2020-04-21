<template>
  <div class="footer">
    <div class="friend-link">
      <!-- <span>友情链接</span>
      <a href="https://www.humandetail.com/">细节个人博客</a>
      <a href="http://www.yueluo.club/">月落个人博客</a> -->
    </div>
    <div class="footer-text">
      <span>© 2020 {{$t('appOwner')}} {{$t('copyright')}}</span>
      <!-- <a href="http://www.beian.miit.gov.cn/">桂ICP备15001784号</a> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyFooter'
}
</script>
<style lang="scss">
.footer {
  position: relative;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #13aad2;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-top: 1px solid #eee;
  .friend-link,
  .footer-text {
    padding-bottom: 10px;
    >span {
      padding-right: 15px;
    }
    >a {
      font-size: 12px;
      padding-left: 5px;
      color: #fff;
    }
    >a:hover {
      color: #eee !important;
      cursor: pointer;
    }
  }
  .footer-text {
    padding-bottom: 1px;
  }
}
</style>