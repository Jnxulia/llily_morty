import React, { Component } from 'react';  
import {  Route, Switch , Redirect} from "react-router-dom";
import {Container} from 'react-bootstrap';
import routes from '../routes' 
import { isLogin } from '../commons/Token';
import './EmptyLayout.css'
import Header from '../components/Header';
class EmptyLayout extends Component {

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
         
          <Route
            path={prop.layout + prop.path}
            render={props => (
              isLogin()  ?
              <Redirect to="/admin/characters" />
            : 
              <prop.component
                {...props}
              
              />
            )}
            key={key}
          />
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
          <Header/>
          <div className="container">
            <Container>
                <Switch>{this.getRoutes(routes)}</Switch>
            </Container>
    
          </div>
        </div>
    </div>
  

    );
  }
}

export default EmptyLayout;  