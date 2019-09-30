import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/home';
import login from '../src/pages/login';
import loginMro from '../src/pages/loginMro';
import HomeAdmin from '../src/pages/homeAdmin';
import Upload from '../src/pages/upload';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={loginMro} />
      <Route exact path="/admin/login" component={login} />
      <Route exact path="/admin" component={HomeAdmin} />
      <Route exact path="/upload" component={Upload} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

