<template>
  <div class="wrap">
    <div class="user-box">
      <div class="img-box">
        <img src="@/assets/img/tangyuan.png" alt="">
      </div>
      <div class="info-box">
        <h3>{{$t('appOwner')}}</h3>
        <p>{{$t('aboutme.motto')}}</p>
      </div>
    </div>
    <div class="msg-box">
      <h4>{{$t('aboutme.gitAddress')}}</h4>
      <p>Gitee: </p>
      <p><a href="https://gitee.com/adingGit" target="view_frame">https://gitee.com/adingGit</a></p>
      <p>Github: </p>
      <p><a href="https://github.com/adingGit" target="view_frame">https://github.com/adingGit</a></p>
    </div>
    <!-- <div class="msg-box">
      <h4>项目地址</h4>
      <p><a href="https://gitee.com/wenxinshuimu" target="view_frame">H5聚生活</a></p>
      <p><a href="https://gitee.com/wenxinshuimu" target="view_frame">PC聚生活</a></p>
      <p><a href="https://gitee.com/wenxinshuimu" target="view_frame">购物车</a></p>
    </div> -->
    <div class="img-info">
      <img class="img" src="@/assets/img/aboutme3.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrap {
    display: flex;
    flex-direction: column;
    width: 70%;
    min-height: 900px;
    padding: 20px 50px;
    margin: 75px auto 20px auto;
    background-color: #fff;
    box-sizing: border-box;
    .user-box {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #aaa;
      .img-box {
        width: 100px;
        height: 100px;
        padding: 3px;
        border: 1px solid #aaa;
        border-radius: 50%;
        box-sizing: border-box;
        text-align: center;
        padding-top: 15px;
        img {
          width: 85%;
        }
      }
      .info-box {
        padding: 10px;
        line-height: 45px;
      }
    }
    .msg-box {
      padding: 10px;
      line-height: 30px;
      >p a{
        color: #703333;
        text-indent: 32px;
        display: block;
      }
      >p a:hover{
        color: #666;
      }
    }
    .img-info {
      height: 300px;
      .img {
        width: 100%;
        opacity: .6;
      }
    }
  }
</style>