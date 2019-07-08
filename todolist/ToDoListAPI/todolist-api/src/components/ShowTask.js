import React, { Component } from "react";
export default class ShowTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      value: ""
    };
  }
  onClickClose = id => {
    this.props.delete(id);
  };
  onClickToDone = id => {(
    this.props.markTodoDone(id)
  )
    
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  onClickEdit = (id, data) => {
    this.props.updateProduct(id, data);
    this.setState(prevState => ({
      display: !prevState.display
    }));
    console.log(this.props.getTask);
  };

  render() {
    return (
      <div>
        <ul className="ul">
          {this.props.getTask.map(list => (
            <li className="list-group-item checkbox" key={list.id}>
              <div className="row">
                <div className="row-input  col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                  <label>
                    <input
                      id="toggleTaskStatus"
                      type="checkbox"
                      defaultChecked={list.status}
                      onClick={() => this.onClickToDone(list.id)}
                    />
                  </label>
                </div>
                <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10">
                  <input
                    id={`${list.status ? "complete" : ""}`}
                    className={
                      this.state.display ? "enabledInput" : "disabledInput"
                    }
                    type="text"
                    defaultValue={list.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                  <i
                    id="deleteTask"
                    className="fa fa-trash"
                    onClick={() => this.onClickClose(list.id)}
                  />

                  {!this.display && (
                    <i
                      id="editTask"
                      className="fa fa-pencil"
                      onClick={() =>
                        this.onClickEdit(list.id, this.state.value)
                      }
                    />
                  )}
                  {this.display && (
                    <i id="deleteTask" className="fa fa-check" />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
