import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return(
    <div className="about-page">
      {this.props.listAbout.map((list1) =>(
        <div key={list1.id}>
          <h2>About me</h2>
          <p>Name: {list1.name}</p>
          <p>Birthday: {list1.birthday}</p>
          <p>Addreess: {list1.address}</p>

          <h2  className="h2-hometown-about">My Hometown</h2>
          <span>{list1.des1}</span>
          <h2 className="h2-childhooh-about">My Childhooh</h2>
          <span>{list1.des2}</span>
          <h2 className="h2-childhooh-about">Personality</h2>
          <span>{list1.des3}</span>
      </div>
      ))}
    </div>
  )}
}

