import { currentApp } from './util';
import { setList, getList } from "./constants/subApps"
import { rewriteRouter } from "./router/rewriteRouter"
import { setMainLifecycle } from './constants/mainLifecycles';

// 实现路由拦截
rewriteRouter()

// 注册子应用列表
export const registerMicroApps = (appList, mainLifecycle) => {
  
  // 注册子应用
  setList(appList)

  // 保留主应用的生命周期
  setMainLifecycle(mainLifecycle)
}

export const start = async () => {
  // 获取子应用列表
  const appList = getList()

  if (!appList.length) {
    throw Error('子应用列表为空，请查看是否正确注册');
  } else {

    // 跳转到第一个子应用
    const app = currentApp();

    if (app) {
      const { pathname, hash } = window.location
      const url = pathname + hash

      window.history.pushState(url, app.name, url || app.activeRule)
    }

    // 将当前子应用做标记
    window.__CURRENT_SUB_APP__ = app.activeRule;

    // // 预加载
    // await prefetch();
  }
}
