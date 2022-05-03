import { registerMicroApps, start } from "../../micro"
export const registerApp = (list) => {
  registerMicroApps(list)
  
  //启动
  start()
}