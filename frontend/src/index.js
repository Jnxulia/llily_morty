import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from './layout/DashboardLayout';
import EmptyLayout from './layout/EmptyLayout';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={props => <DashboardLayout {...props} />} />
        <Route path="/auth" render={props => <EmptyLayout {...props} />} />
        <Redirect from="/" to="/auth/sign-in" />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );


