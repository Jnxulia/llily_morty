import React, { Component } from "react";
import {Navbar, Nav } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import {LogOut} from '../commons/Token'
class NavbarComponent extends Component {
    constructor(props){
        super(props);
        this.state = { canRedirect : false};

      }
      handleLogout(){

        LogOut();
        this.setState({canRedirect : true})


    }
    render() {

        return (
            this.state.canRedirect  ? <Redirect to="/auth/sign-in" /> :

        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Lily and Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/admin/characters">Characters</Nav.Link>
                    <Nav.Link href="/admin/users">Users</Nav.Link>
                    <Nav.Link href="#" onClick={() => this.handleLogout() }>LogOut</Nav.Link>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
  }
}

export default NavbarComponent;