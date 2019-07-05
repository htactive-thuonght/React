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
        { id: 1, name: "Đổ rác", isComplete: true},
        { id: 2, name: "Hút bụi", isComplete: false },
        { id: 3, name: "Nấu ăn", isComplete: true },
        { id: 5, name: "Giặt đồ", isComplete: false }
      ]
    };
  }
  generateId = (length) => {
    var result = '';
    var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * charactersLength); //floor để làm tròn
        result += characters.charAt(random);// charAt để trả về kí tự of chuỗi
    }
    return result;
}
  addTask = task => {
    const oldTasks = this.state.listsTask.concat({
      id: this.generateId(3), name: task,isComplete: false
    });
    // this.setState({ listsTask: [...oldTasks, listsTask] });
    this.setState({
      listsTask: oldTasks
    })
  };
  deleteTodo = (id) => {
    let taskRemove = this.state.listsTask.filter(t => t.id !== id)
    this.setState({
      listsTask: taskRemove
    })
    // this.setState((prevState, currProps) => ({
    //   listsTask: taskRemove,
    //   count: prevState.count + 1
    // }), () => {
    //   console.log(sdfsdf)
    // })
}

  render() {
    return (
      <>
        <Header />
        <AddTask addItem={this.addTask} />
        <ProgressTask />
        <ButtonHandling />
        <ShowTask listsTask={this.state.listsTask} deleteTodo={this.deleteTodo}/>
      </>
    );
  }
}
