import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout';
import Video from '../Video';
import Home from '../Home';
import { useGeneralContext } from '../../context/General';

const Favorites = () => (
  <div>Favorites</div>
);

const ProtectedRoute = ({ ...props }) => {
  const [{ user }] = useGeneralContext();

  if (!user) {
    return <div>nope</div>;
  }

  return <Route {...props} />;
};

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <ProtectedRoute component={Favorites} path="/favorites" exact />
        <Route component={Video} path="/:id" exact />
        <Route component={Home} path="/" />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default Router;
