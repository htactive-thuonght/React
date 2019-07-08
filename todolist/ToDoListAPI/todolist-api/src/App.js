import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import AddTask from "./components/AddTask";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  getTask = data => {
    axios({
      method: "get",
      url: "https://5d1e156d3374890014f00c42.mockapi.io/task"
    })
      .then(result => {
        this.setState({ todos: result.data });
      })
      .catch(error => console.log(error));
  };
  

 
  componentDidMount() {
    this.getTask();
  }

  add = task => {
    axios({
      method: "post",
      url: "https://5d1e156d3374890014f00c42.mockapi.io/task",
      data: {
        name: task
      }
    }).then(() => {
      this.getTask();
    });
  };
  markTodoDone = id => {
    const newList = this.state.todos.map((t, i) => {
      if (t.id === id) {
        return {
          ...t,
          status: !t.status
        };
      }
      return t;
    });
    this.setState({ todos: task });
    // console.log(newList);
  };
  edit = (id, task) => {
    axios({
      method: "put",
      url: "https://5d1e156d3374890014f00c42.mockapi.io/task/" + id,
      data: {
        name: task
      }
    }).then(() => {
      this.getTask();
      console.log(this.getTask);
    });
  };

  removeProduct = id => {
    axios({
      method: "delete",
      url: "https://5d1e156d3374890014f00c42.mockapi.io/task/" + id
    }).then(() => {
      this.getTask();
    });
  };

  render() {
    return (
      <>
        <Header />
        <AddTask addTask={this.add} />
        <ShowTask
          getTask={this.state.todos}
          markTodoDone={this.markTodoDone}
          delete={this.removeProduct}
          updateProduct={this.edit}
        />
      </>
    );
  }
}

export default App;
