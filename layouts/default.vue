<template>
  <div class="default-layout">
    <my-header />
    <div class="main_container">
      <nuxt />
      <my-footer />
    </div>
  </div>
</template>
<script>
import MyHeader from '../components/header/Index'
import MyFooter from '../components/footer/Index'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    #__nuxt {
      height: 100%;
      #__layout {
        height: 100%;
        .default-layout {
          height: 100%;
          display: flex;
          flex-direction: column;
          .main_container {
            //margin: 75px auto 20px;
            //min-height: calc(100vh - 163px);
            //min-width: 1000px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            > .container {
              flex: 1;
              margin: 75px auto 20px;
            }
          }
        }
      }
    }
  }
</style>
