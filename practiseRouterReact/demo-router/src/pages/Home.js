import "./pages.css";
import React, { Component } from "react";
import {Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props.list[0].id);
  }
  render() {
   
    return (
      <div>
        <h2 className="h2-home-page">My Flowers</h2>
        <div className="row row-home">
          {this.props.list.map((list) =>(
            <div className="card col-md-4 card-home" key={list.id}>
              <Link to={`/detail/${list.id}`} ><img className="card-img-top" src={list.image} alt=""/>
              </Link>
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
