
import React, { Component } from 'react'
export default class ShowTask extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.listsTask)
  }
  onClickClose = (id) => {
    this.props.deleteTodo(id);
  }
  onClickToDone = (id) => {
    this.props.markTodoDone(id);
  }
  onClickEdit = (id) => {
    this.props.updateToDo(id);
  }
  render() {
    return (
      <div>
          <ul className="ul">
            {this.props.listsTask.map( list => (
              <li className="list-group-item checkbox" key={list.id}>
                <div className="row">
           <div className="row-input  col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
             <label><input  id="toggleTaskStatus" type="checkbox" defaultChecked={list.isCompleted} onClick={() => this.onClickToDone(list.id)}/></label>
           </div>
           <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10">
             <input className={`inputTask ${list.isCompleted ? "complete" : ""}`} type="text" defaultValue={list.name} disabled/>
           </div>
           <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
             <a  onClick={() => this.onClickEdit(list.id)}><i id="editTask" className="fa fa-pencil"/></a>
             <a><i id="deleteTask" className="fa fa-trash" onClick={() => this.onClickClose(list.id)}/></a>
             <a ><i id="deleteTask" className="fa fa-check"/></a>
           </div>
         </div>
              </li>
            ))}
          </ul>
          </div>
          // onClick={() => this.onClickEdit(list.id)} id={`update-{list.id}`}
          // onClick={() => this.onClickSave(list.id)} id={`save-{list.id}`}
    )
  }
}
