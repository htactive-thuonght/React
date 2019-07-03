import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ProgressTask from "./components/ProgressTask";
import ButtonHandling from "./components/ButtonHandling";
import ShowTask from "./components/ShowTask";
import "./App.css";

// const todoItems = [];
// todoItems.push({index: 1, value: "learn react", done: false});
// todoItems.push({index: 2, value: "Go shopping", done: true});
// todoItems.push({index: 3, value: "buy flowers", done: true});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listsTask: [
        { id: 1, name: "Đổ rác" },
        { id: 2, name: "Hút bụi" },
        { id: 3, name: "Nấu ăn" },
        { id: 5, name: "Giặt đồ" }
      ]
    };
  }
  addTask = listsTask => {
    const oldTasks = this.state.listsTask;
    this.setState({ listsTask: [...oldTasks, listsTask] });
  };

  render() {
    return (
      <>
        <Header />
        <AddTask addItem={this.addTask} />
        <ProgressTask />
        <ButtonHandling />
        <ShowTask listsTask={this.state.listsTask} />
      </>
    );
  }
}
