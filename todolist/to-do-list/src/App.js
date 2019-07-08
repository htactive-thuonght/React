import React, { Component } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ProgressTask from "./components/ProgressTask";
import ButtonHandling from "./components/ButtonHandling";
import ShowTask from "./components/ShowTask";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listsTask: [
        { id: 1, name: "Đổ rác", isCompleted: true},
        { id: 2, name: "Hút bụi", isCompleted: false },
        { id: 3, name: "Nấu ăn", isCompleted: true },
        { id: 5, name: "Giặt đồ", isCompleted: false }
      ],
      isEditing:false
    };
  }


  updateToDo = (id) => {
    let a = this.state.listsTask.findIndex(item => item.id = id)
    console.log(a)
    let data = this.state.listsTask[id];
    console.log(data)
    this.state.listsTask.name = data.name;
    // this.refs.address.value = data.address;

    this.setState({
      listsTask:data
    });

    this.state.listsTask.name.focus();
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
      id: this.generateId(3), name: task,isCompleted: false
    });
    // this.setState({ listsTask: [...oldTasks, listsTask] });
    this.setState({
      listsTask: oldTasks
    })
  };
  markTodoDone = id => {
    console.log(id)
    const newList = this.state.listsTask.map((t, i) => {
      if (t.id === id) {
        return {
          ...t,
          isCompleted: !t.isCompleted
        };
      }
      return t;
    });
    this.setState({ listsTask: newList });
  };
  selectCompleted = () => {
    let resultFiter = this.state.listsTask.filter(element => element.isCompleted === true);
    this.setState({
      listsTask: resultFiter
    })
}
  removeComplete = () => {
  let removeCompleted = this.state.listsTask.filter(t => !t.isCompleted)
  this.setState({
    listsTask: removeCompleted
  })
}
  selecActive = () => {
  let resultActive = this.state.listsTask.filter(element => element.isCompleted === false);

  this.setState({
    listsTask: resultActive
  })
}

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
  calculate = () => {
  let sum = this.tasks.length;
  let resultCompleted = this.state.listsTask.filter(element => element.isCompleted === true);
  let percent = (resultCompleted.length / sum) * 100;
  let a = document.getElementById("progress")
  if (percent < 30) {
      a.className = "progress-bar bg-danger"
      document.getElementById("progress").style.width = percent + "%"
  }
  else if (percent > 30 && percent < 70) {
      a.className = "progress-bar bg-warning"
      document.getElementById("progress").style.width = percent + "%"
  }
  else {
      a.className = "progress-bar bg-success"
      document.getElementById("progress").style.width = percent + "%"
  }

}
  allDone = () => {
  const todos = this.state.listsTask.map(todo => {
    return {
      name: todo.name,
      isCompleted: true
    };
  });
  this.setState({
    listsTask : todos
  });
}
  render() {
    return (
      <>
        <Header />
        <AddTask addItem={this.addTask} />
        <ProgressTask calculate={this.calculate}/>
        <ButtonHandling selectCompleted={this.selectCompleted} removeComplete = {this.removeComplete} selecActive={this.selecActive} allDone ={this.allDone}/>
        <ShowTask listsTask={this.state.listsTask} deleteTodo={this.deleteTodo} markTodoDone={this.markTodoDone} updateToDo={this.updateToDo}/>
      </>
    );
  }
}
