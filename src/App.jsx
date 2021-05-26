import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '@components/pages/login';
import Product from '@components/pages/product';
import { GlobalStyles } from '@src/GlobalStyles';
import Context from '@src/Context';
import Layout from '@components/layout';

export default () => {
  return (
    <Context.Provider>
      <GlobalStyles />
      <Router>
        <Layout>
          <Switch>
            <Route exact component={Login} path='/login' />
            <Route exact component={Product} path='/productos' />
            <Route exact component='' path='/personal' />
            <Route exact component='' path='/ventas' />
          </Switch>
        </Layout>
      </Router>
    </Context.Provider>
  );
};
