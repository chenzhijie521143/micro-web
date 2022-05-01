if (module.hot) { module.hot.accept() }
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { subNavList } from './store/sub';
import { registerApp } from './utils';

// 注册子应用
registerApp(subNavList);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('main-app')
)