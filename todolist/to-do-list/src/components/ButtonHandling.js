import React, { Component } from "react";

export default class ButtonHandling extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btnC">
        <button className="btn btn-btn btn-success" id="filter">
          All
        </button>
        <button className="btn btn-btn btn-success" id="filter">
          Completed
        </button>
        <button className="btn btn-btn btn-success" id="filter">
          Active
        </button>
        <button className="btn btn-btn btn-success" id="filter">
          Clear Completed
        </button>
        {/* <button className="btn btn-success" style={{visibility: 'hidden'}} id="undo" onclick="toDo.unDo(event,'${task.id}')"><i className="fa fa-undo" /></button> */}
      </div>
    );
  }
}
