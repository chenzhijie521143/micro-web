import { APP_CONTAINER } from "../constants/config";

const userInfo = {
  'name': '张三',
  'age': 23
}

export const subNavList = [
  {
    name: 'app1',
    activeRule: '/app1',
    container: APP_CONTAINER,
    entry: '//localhost:8000/',
    userInfo
  },
  {
    name: 'app2',
    activeRule: '/app2',
    container: APP_CONTAINER,
    entry: '//localhost:8001/',
    userInfo
  },
]