import React, { Component } from "react";

export default class ActionButton extends Component {
  constructor(props) {
    super(props);
  }
  onClickSelectComplete = () => {
    this.props.selectCompleted();
  }
  onClickRemoveCompleted = () => {
    this.props.removeComplete();
  }
  onClickActive = () => {
    this.props.selecActive();
  }
  onClickCheckAll = () => {
    this.props.checkSelectAll();
  }
  onClickselectAllTask = () =>{
    this.props.selectAllTask();
  }
  onClickAllDone = () =>{
    this.props.allDone();
  }
  render() {
    return (
      <>
      <div>
          </div>
      <div className="btnC">
        {/* <button className="btn btn-btn btn-success" id="filter" onClick={this.onClickSelectAll}>
          All
        </button> */}
        <button className="btn btn-btn btn-success" id="filter" onClick={this.onClickAllDone}>
          All Completed
        </button>
        <button className="btn btn-btn btn-success" id="filter" onClick={this.onClickSelectComplete}>
          Completed
        </button>
        <button className="btn btn-btn btn-success" id="filter" onClick={this.onClickActive}>
          Active
        </button>
        <button className="btn btn-btn btn-success" id="filter" onClick={this.onClickRemoveCompleted}>
          Clear Completed
        </button>
        {/* <button className="btn btn-success" style={{visibility: 'hidden'}} id="undo" onclick="toDo.unDo(event,'${task.id}')"><i className="fa fa-undo" /></button> */}
      </div>
      </>
    );
  }
}