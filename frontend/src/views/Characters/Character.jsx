import React, { Component } from "react";
export class Character extends Component {
  render() {
    return (
      <div  >

      <div className="card " >
        <img className="card-img-top"  src={this.props.bgImage} alt="image" />
        <div className="header-title"> <a href="/character#id">{this.props.name}</a></div>
      </div>
      <div className="card ">
        <div className="card-footer">
              <p><small><b>Status</b> <i>{this.props.status}</i></small></p>
              <p><small><b>Species</b> <i>{this.props.species}</i></small></p>
              <p><small><b>Gender</b> <i>{this.props.gender}</i></small></p>
              
          </div>
              
         </div>
      </div>

    );
  }
}

export default Character;
