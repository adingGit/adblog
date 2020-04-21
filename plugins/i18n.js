import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhLang from '~/locales/zh.json';
import enLang from '~/locales/en.json';
Vue.use(VueI18n);
export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: store.state.locale || 'zh',
    messages: {
      'zh': zhLang,
      'en': enLang
    }
  });
  app.i18n.path = (link) => {
    /*
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    */
    console.log(link);
    return `/${link}`;
  }
}