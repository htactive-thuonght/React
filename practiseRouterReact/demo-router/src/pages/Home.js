import "./pages.css";
import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
   
    return (
      <div>
        <h2 className="h2-home-page">My Flowers</h2>
        <div className="row row-home">
          {!this.props.location.state ? "" : this.props.location.state.map((list) =>(
            <div className="card col-md-4 card-home" key={list.id}>
              <img className="card-img-top" src={list.image} alt=""/>
              <div className="card-body">
                <p className="card-text">
                  Name: {list.name} || Age: {list.age}
                </p>
                <p className="card-text">Hobby: {list.title}</p>
              </div>
            </div>
            ))
          }
         
        </div>
      </div>
    );
  }
}
