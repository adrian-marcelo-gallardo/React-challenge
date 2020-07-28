import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import Video from '../Video';
import Home from '../Home';

const Favorites = () => (
  <div>Favorites</div>
);

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route component={Favorites} path="/favorites" exact />
        <Route component={Video} path="/:id" exact />
        <Route component={Home} path="/" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
