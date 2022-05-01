import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import App1 from './routes/app1';
import App2 from './routes/app2';

const App = () => {
  const routes = [
    {
      path: '/app1',
      component: <App1 />,
    },
    {
      path: '/app2',
      component: <App2 />,
    }
  ];
  return (
    <BrowserRouter>
      <Link to='/app1' style={{ padding: 20, display: 'inline-block' }}>app1</Link>
      <Link to='/app2' style={{ padding: 20, display: 'inline-block' }}>app2</Link>
      <Routes>
        <Route path="/" element={<Navigate replace to="/app1" />} />
        {routes.map((i) => (
          <Route key={i.path} path={i.path} element={i.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App
