if (module.hot) { module.hot.accept() }
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const render = () => {
  ReactDOM.render(<App />, document.getElementById('main-app'))
}
render()