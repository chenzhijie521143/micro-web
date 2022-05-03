import { registerMicroApps, start } from "../../micro"
export const registerApp = (list) => {
  registerMicroApps(list,
    { // 生命周期
      beforeLoad: [
        app => {
          // app.loading.openLoading()
          // // 每次改动，都将头部和底部显示出来，不需要头部和底部的页面需要子应用自己处理
          // headerState.changeHeader(true)
          // footerState.changeFooter(true)
          console.log('开始加载 -- ', app.name);
        },
      ],
      mounted: [
        app => {
          console.log('加载完成 -- ', app.name);
          // setTimeout(() => {
          //   app.loading.closeLoading()
          // }, 200)
        },
      ],
      destoryed: [
        app => {
          console.log('卸载完成 -- ', app.name);
        },
      ],
    })

  //启动
  start()
}