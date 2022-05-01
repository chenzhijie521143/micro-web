import { APP_CONTAINER } from "../constants/config";

export const subNavList = [
  {
    name: 'app1',
    activeRule: '/app1',
    container: APP_CONTAINER,
    entry: '//localhost:8000/',
  },
  {
    name: 'app2',
    activeRule: '/app2',
    container: APP_CONTAINER,
    entry: '//localhost:8001/',
  },
]