
import React, { Component } from 'react'
export default class ShowTask extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.listsTask)
  }
  onClickClose = (id) => {
    this.props.deleteTodo(id);
  }
  render() {
    return (
      <div>
          <ul className="ul">
            {this.props.listsTask.map( list => (
              <li className="list-group-item checkbox" key={list.id}>
                <div className="row">
           <div className="row-input  col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
             <label><input id="toggleTaskStatus" type="checkbox"/></label>
           </div>
           <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text">
             <input className="inputTask " type="text" defaultValue={list.name}/>
           </div>
           <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
             <a   id="save"><i id="editTask"  className="fa fa-pencil" /></a>
             <a   data-confirm="Are you sure to delete this item?"><i id="deleteTask"  className="fa fa-trash" onClick={() => this.onClickClose(list.id)} /></a>
           </div>
         </div>
              </li>
            ))}
          </ul>
          </div>
    )
  }
}
