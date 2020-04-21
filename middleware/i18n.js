/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
import getCookie from '~/utils/getCookie';
export default function ({
  isHMR, app, store, route, params, error, redirect, req
}) {
  // 如果是热更新替换模块则忽略后面的逻辑
  if (isHMR) {
    return;
  }
  // 获取cookie
  let cookies = {};
  if(process.client){
    cookies = getCookie.getcookiesInClient(req);
  } else {
    cookies = getCookie.getcookiesInServer(req);
  }
  // 没设置语言的默认切换为中文语言
  let lang = cookies.lang ? cookies.lang : 'zh';
  // 提交语言状态
  store.commit('SET_LANG', lang);
  app.i18n.locale = store.state.locale;
}