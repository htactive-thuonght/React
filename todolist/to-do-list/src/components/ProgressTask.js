import React, { Component } from "react";

export default class ProgressTask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="progress border">
        <div  id="progress" />
      </div>
    );
  }
}
