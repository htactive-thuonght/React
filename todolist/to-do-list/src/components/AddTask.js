import React, { Component } from 'react'
export default class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(
      this.state.value
    )
  }

  render() {
    const listTask = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-area row ">
        <div className="form-group col-md-9">
          <input type="text" value={listTask.value} onChange={this.handleChange} placeholder="New Task"  className="form-control" id="addTask" />
        </div>
        <div className="form-group col-md-1">
          <input type="submit" className="btn btn-success" value="ADD" />
        </div>
      </div>
      </form>
      
    )
  }
}


