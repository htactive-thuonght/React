import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import AddTask from "./components/AddTask";
import axios from "axios";
let mock_api = "https://5d1e156d3374890014f00c42.mockapi.io/task";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  getTask = () => {
    axios({
      method: "get",
      url: mock_api
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
      url: mock_api,
      data: {
        name: task
      }
    }).then(() => {
      this.getTask();
    });
  };
  edit = (id, task) => {
    axios({
      method: "put",
      url: mock_api + id,
      data: {
        name: task
      }
    }).then(() => {
      this.getTask();
    });
  };

  removeProduct = id => {
    axios({
      method: "delete",
      url: mock_api + id
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
