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
  console.log('app1 bootstrap')
}

export async function mount(app) {
  console.log('app1 mount')
  render()
}

export async function unmount(ctx) {
  console.log('app1 unmout')
  const { container } = ctx
  if (container) {
    document.getElementById(container).innerHTML = ''
  }
}
