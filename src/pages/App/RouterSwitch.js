import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../Home'));

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
];

const RouterSwitch = () => (
  <Suspense fallback={<div></div>}>
    <Switch>
      {routes.map((props, index) => (
        <Route key={index} {...props} />
      ))}
    </Switch>
  </Suspense>
);

export default RouterSwitch;
