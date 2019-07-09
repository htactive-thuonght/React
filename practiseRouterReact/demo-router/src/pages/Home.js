import "./pages.css";
import thuy from "./../images/thuy.jpg";
import nhung from "./../images/nhung.jpg";
import trang from "./../images/trang.jpg";
import huong from "./../images/huong.jpg";
import ly from "./../images/ly.jpg";
import thuong from "./../images/thuong.jpg";
import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name = "Cao Thi Thuy", age = 20, title = "Watching TV" } =
      this.props.location.state || {};
    const { id1 = 2, name1 = "Nguyễn P.Nhung", age1 = 20, title1 = "Makeup" } =
      this.props.location.state[1] || {};
    const { name2 = "Nguyễn Mỹ Trang", age2 = 23, title2 = "Traveling" } =
      this.props.location.state[2] || {};
    const { name3 = "Nguyễn Thu Hương", age3 = 20, title3 = "Gossiping" } =
      this.props.location.state[3] || {};
    const { name4 = "Đoàn Thị Ly", age4 = 20, title4 = "Typing" } =
      this.props.location.state[4] || {};
    const { name5 = "Hoàng Thị Thương", age5 = 20, title5 = "Sleep" } =
      this.props.location.state[5] || {};
    return (
      <div>
        <h2 className="h2-home-page">My Girls</h2>
        <div className="row row-home">
          <div className="card col-md-4 card-home" style={{ width: "18rem" }}>
            <img className="card-img-top" src={thuy} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Name: {name} || Age: {age}
              </p>
              <p className="card-text">Hobby: {title}</p>
            </div>
          </div>
          <div className="card col-md-4 card-home" style={{ width: "18rem" }}>
            <img className="card-img-top" src={nhung} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Name: {name1} || Age: {age1}
              </p>
              <p className="card-text">Hobby: {title1}</p>
            </div>
          </div>
          <div className="card col-md-4 card-home" style={{ width: "18rem" }}>
            <img className="card-img-top" src={trang} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Name: {name2} || Age: {age2}
              </p>
              <p className="card-text">Hobby: {title2}</p>
            </div>
          </div>
        </div>
        <div className="row row-home">
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={huong} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Name: {name3} || Age: {age3}
              </p>
              <p className="card-text">Hobby: {title3}</p>
            </div>
          </div>
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={ly} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Name: {name4} || Age: {age4}
              </p>
              <p className="card-text">Hobby: {title4}</p>
            </div>
          </div>
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={thuong} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Name: {name5} || Age: {age5}
              </p>
              <p className="card-text">Hobby: {title5}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
