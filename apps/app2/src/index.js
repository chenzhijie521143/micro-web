if (module.hot) { module.hot.accept() }
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

if (!window.__MICRO_WEB__) {
  render()
}

export async function bootstrap() {
  console.log('app2 bootstrap')
}

export async function mount(app) {
  console.log('app2 mount')
  render()
}

export async function unmount(ctx) {
  console.log('app2 unmout')
  const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}
