import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = () => (
  <div>Home</div>
);

const Favorites = () => (
  <div>Favorites</div>
);

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Favorites} path="/favorites" exact />
      <Route component={Home} path="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
