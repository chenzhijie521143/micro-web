import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';

const Router = () => {
  const routes = [
    {
      path: '/',
      component: <App />,
    },
    {
      path: '/app1',
      component: <App />,
    },
    {
      path: '/app2',
      component: <App />,
    }
  ];
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((i) => (
          <Route key={i.path} path={i.path} component={i.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Router
