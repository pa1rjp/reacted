'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ModelPage from './components/ModelPage';
import DetailsPage from './components/DetailsPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="model/:id" component={ModelPage}/>
    <Route path="details/:id" component={DetailsPage}/>
    <Route path="*" component={IndexPage}/>
  </Route>
);

export default routes;
