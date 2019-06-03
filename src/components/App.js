import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'
class App extends Component {
  counter = 7
  state = {
    tasks: [
      // {
      //   id: 0,
      //   text: 'Wykonać to do app',
      //   date: '2019-06-06',
      //   important: true,
      //   active: true,
      //   finishDate: null
      // },
    ]
  }

  deleteTask = (id) => {
    console.log('delete' + id);
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)

    this.setState({
      tasks
    })
  }

  changeActiveStatus = (id) => {
    console.log('done' + id);
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
        console.log(task.finishDate);
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="app">
        <h1 style={{ textDecoration: "underline" }}>Lista zadań do końca 2020</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} done={this.changeActiveStatus} />
      </div>
    );
  }
}

export default App;