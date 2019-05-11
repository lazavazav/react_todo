import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/functional/Header';
import AddToList from './components/AddToList';

class App extends Component { 
  state = {
    todos: [
      {
        id: 1,
        title: 'Do homework',
        completed: false
      },
      {
        id: 2,
        title: 'Walk the dog',
        completed: false
      },
      {
        id: 3,
        title: 'Do the dishes',
        completed: false
      },
    ]
  }


  onComplete = (id) => {
     this.setState({ todos: this.state.todos.map(todo => {
       if(todo.id === id) {
         todo.completed = !todo.completed
       }
       return todo;
     }) });
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)] });
  }

  addToList = (title) => {
    const newForList = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newForList] });
  }

  render() {
  return (
    <div className="App">
    <Header />
    <AddToList addToList={this.addToList} />
     <Todos todos={this.state.todos} onComplete={this.onComplete} deleteTodo={this.deleteTodo} />
    </div>
    );
  }
}





export default App;
