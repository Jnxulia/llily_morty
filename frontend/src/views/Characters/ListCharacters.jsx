import React, { Component } from 'react';  
import {Row,Col } from "react-bootstrap";
import Character from './Character';
import CharacterApi from '../../api/CharactersApi';
import {  Redirect } from "react-router-dom";
import ProgresBar from '../../components/ProgresBar';

import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
class ListCharacters extends Component {
  constructor(props){
    super(props);
    this.state = {characters : [], loading : true, redirect : false}
  }
  componentDidMount() {
    this._mounted = true;
    CharacterApi.get().then(response =>{
      if( response.status)  {
        this.setState({characters : response.data.results , loading : false});
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
        content = this.state.characters.map((character, i) =>
        <Col md={3} key={i} className="fadeCard" >
            <Character 
              bgImage={character.image}
              name = {character.name}
              status = {character.status}
              species = {character.species}
              gender = {character.gender}
            />   
      </Col>
     ); 
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
  export default ListCharacters;
