
import React, { Component } from 'react'
export default class TableStudents extends Component {
  // constructor(props) {
  //   super(props)
    
  // }
  render(){
    return (
      <div>
        <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>1</td>
          <td>phuong</td>
          <td>Thanh Hoa</td>
      </tr>
    </tbody>
  </table>
      </div>
    )
  }
  
}


