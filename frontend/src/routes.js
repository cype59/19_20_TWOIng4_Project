import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom';
import PageDashboard from './Components/PageDashboard';
import AdminPage from './Components/AdminPage';

export default () =>
(
    <Switch>
        <Route path="/" exact component={PageDashboard}/>
        <Route path="/admin" exact component={AdminPage}/>
    </Switch>
   
);