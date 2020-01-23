import React, { Component } from 'react';  
import {Row , Table } from "react-bootstrap";
import {  Redirect } from "react-router-dom";
import ProgresBar from '../../components/ProgresBar';

import axios from 'axios';
import UserApi from '../../api/UserApi';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
class ListUsers extends Component {
  constructor(props){
    super(props);
    this.state = {listUser : [], loading : true, redirect : false}
  }
  componentDidMount() {
    this._mounted = true;
    UserApi.get().then(response =>{
        debugger;   
      if( response.status)  {
        this.setState({listUser : response.data , loading : false});
      } else {
        this.setState({redirect : true});
      }
            
    }).catch(function (thrown) {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message);
     
      }
    });
  }
  componentWillUnmount (){
    source.cancel('Operation canceled by the user.');

  }
  render() {
    
    if (this.state.redirect) return <Redirect to="/auth/sign-in" />
    let content  = <ProgresBar />;
    if (!this.state.loading) {
        
        content = <Table striped bordered hover>
        <thead>

            <tr>
                <th>Username</th>
            </tr>
        </thead>
        <tbody>
        {this.state.listUser.map((user, i) =>
            <tr><td>{user.user}</td></tr>
        
        )}
        </tbody>
     </Table>
    }
      
    return (
      <div className="content">
        
        <Row>
          {content}
          </Row>
      </div>
    );
  }
}
  export default ListUsers;
