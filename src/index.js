if (module.hot) { module.hot.accept() }
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.less';

export const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}
render()