import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList'



class App extends Component {
  counter = 7
  state = {
    tasks: [
      {
        id: 0,
        text: 'Umyć samochód',
        date: '2019-02-02',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Zrobić coś dobrego',
        date: '2020-04-18',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Pomalować pokoje',
        date: '2019-07-01',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'Wyjechać na wakacje',
        date: '2019-10-09',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: 'Kupić TV i konsole',
        date: '2020-05-08',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: 'Posprzątać pokój',
        date: '2019-08-22',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: 'Spakować się',
        date: '2019-07-08',
        important: false,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {
    console.log('delete' + id);
    // const tasks = [...this.state.tasks];
    // console.log(tasks);
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1) //usuń od index 1 w prawo
    // console.log(tasks);

    // this.setState({
    //   tasks
    // })

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
        <h1>Lista zadań do końca 2020</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} done={this.changeActiveStatus} />
      </div>
    );
  }
}

export default App;