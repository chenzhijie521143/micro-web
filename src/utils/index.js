
import { registerMicroApps, start } from 'qiankun';

export const registerApp = (list) => {
  registerMicroApps(list,
    { // 生命周期
      beforeLoad: [
        app => {
          console.log('开始加载 -- ', app.name);
        },
      ],
      afterMount: [
        app => {
          console.log('加载完成 -- ', app.name);
        },
      ],
      afterUnmount: [
        app => {
          console.log('卸载完成 -- ', app.name);
        },
      ],
    })

  //启动
  start()
}