if (module.hot) { module.hot.accept() }
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('app1 bootstrap')
}

export async function mount(app) {
  console.log('app1 mount')
  console.log("window.__POWERED_BY_QIANKUN__", window.__POWERED_BY_QIANKUN__)
  render()
}

export async function unmount(ctx) {
  console.log('app1 unmout')
}
