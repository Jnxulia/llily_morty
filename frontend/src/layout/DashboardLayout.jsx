import React, { Component } from 'react';  
import {  Route, Switch , Redirect } from "react-router-dom";
import routes from '../routes' 
import { isLogin } from '../commons/Token';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavbarComponent from '../components/NavBar';
class DashboardLayout extends Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {

        return (
          isLogin() ?
          <Route
            path={prop.layout + prop.path}
            render={props => (
              
              <prop.component
                {...props}
             
              />
              
            )}
            key={key}
          />
           : <Redirect to="/auth/sign-in" />
        );
      }else{
        return null;
      } 
    });
  };

  render() {
    return (
      <div className="container">
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <NavbarComponent/>
          <Header/>
          <div className="container">
            <Switch>{this.getRoutes(routes)}</Switch>
          </div>
          <Footer/>
          </div>
      </div>
    
      
    );
  }
}

export default DashboardLayout;  