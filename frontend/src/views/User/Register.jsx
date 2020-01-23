import React, { Component } from 'react';
import UserApi from '../../api/UserApi'
import {Form, Button, Alert}  from 'react-bootstrap'
import ReactLoading from "react-loading";
import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
class Register extends Component {
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
    this.state  = {form : {
                          username :"" , 
                          password : "", 
                          repeat_password : ""}, 
                  loading : false, 
                  error  :  ""}

  }
  async submit(event){
    event.preventDefault();
    const form = event.currentTarget;
    this.setState({loading : true})
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
    }else{
       
      const result = await UserApi.signUp(this.state.form);
      this.mounted = true;
      if(result.status ){
        this.props.history.push('/auth/sign-in')
      }else{
        this.setState({error : result.error.data.message})
      }
      this.setState({loading : false})
    }
  }
  componentWillUnmount (){
    source.cancel('Operation canceled by the user.');

  }
  handleChange(field, e){       
    this.setState({error : ""})  
    let fields = this.state.form;
    fields[field] = e.target.value;        
    this.setState({fields});
}
  render() {
    let alert;
    if (this.state.error ) {
      alert = <Alert key={"danger"} variant={"danger"}>{this.state.error}</Alert>

    }
    let txtButton = "Register";
    if(this.state.loading){
      txtButton = <ReactLoading  type="spin" color="#00f" height={'32px'} width={'32px'}/>
      
    }
    let button = <Button className="btn btn-lg btn-primary btn-block" type="submit">{txtButton}</Button> 
      
      return (
       <div>
        {alert}
          <Form  className="form-signin" onSubmit={this.submit}>
            <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
            <Form.Group  md="4" >
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                minlength="5"
                type="text"
                onChange ={(e)=>this.handleChange("username", e)} 
                placeholder="Username"/>
              </Form.Group>
              <Form.Group  md="4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  minlength="5"
                  placeholder="Password"
                  onChange ={(e)=>this.handleChange("password", e)} 
                  defaultValue=""/>
              </Form.Group>
              <Form.Group  md="4">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange ={(e)=>this.handleChange("repeat_password", e)} 
                  defaultValue=""/>
              </Form.Group>
              {button}
              <div>Already have an account? <a href="/auth/sign-in">Sign In</a></div>
          </Form>
      </div>
        
      );
    }
  }
  export default Register;