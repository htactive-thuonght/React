<div className="App">
<button onClick={()=> get()} >GET</button>
<button onClick={()=> get(2)} >GET ID 2</button>
<button onClick={()=> edit()} >Update 3 -> THUONG + 3456789</button>
<button onClick={()=> add('thuong')} >ADD thuong</button>
</div>
import React, { Component } from 'react'
import './App.css';

import Header from './components/Header';
import ShowTask from './components/ShowTask';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
class App extends React.Component{
  getTask = (data) => {
    if (data > 0) {
      axios({
        method: 'get',
        url: 'https://5d1e156d3374890014f00c42.mockapi.io/task'
      })
      .then((data)=> {
        console.log(data.data);
      });
    } else {
      axios({
        method: 'get',
        url: 'https://5d1e156d3374890014f00c42.mockapi.io/task'
      }).then((data)=> {
        console.log(data.data);
      });
    }
  }

  edit = (task) => {
    axios({
      method: 'put',
      url: 'https://5d1e156d3374890014f00c42.mockapi.io/task/3',
      data: {
        name: task
      }
    }).then((data)=> {
      console.log(data);
      this.getTask();
    });
  }

  add = (inp) => {
    axios({
      method: 'post',
      url: 'https://5d1e156d3374890014f00c42.mockapi.io/task',
      data: {
        name: inp
      }
    }).then((data)=> {
      console.log(data);
      this.getTask();
    });
  }

  render() {
    const {getTask, edit, add} = this;

    return (
     <>
     <div className="App">
<button onClick={()=> getTask()} >GET</button>
<button onClick={()=> getTask(2)} >GET ID 2</button>
<button onClick={()=> edit()} >Update 3 -> THUONG + 3456789</button>
<button onClick={()=> add('thuong')} >ADD thuong</button>
</div>
     {/* <Header/>
     <ShowTask getTask = {getTask} /> */}
       </>
    );
  }
}

export default App;
