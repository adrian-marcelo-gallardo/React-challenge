import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider as GeneralContext } from '../../context/General';
import Layout from '../Layout';
import Home from '../Home';
import Lol from '../Lol';

const Favorites = () => (
  <div>Favorites</div>
);

const Router = () => (
  <BrowserRouter>
    <GeneralContext>
      <Layout>
        <Switch>
          <Route component={Favorites} path="/favorites" exact />
          <Route component={Lol} path="/lol" exact />
          <Route component={Home} path="/" />
        </Switch>
      </Layout>
    </GeneralContext>
  </BrowserRouter>
);

export default Router;
