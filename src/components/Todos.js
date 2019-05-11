import React, { Component } from 'react';
import TodoThings from './TodoThings';


class Todos extends Component { 
  onComplete = () => {
    
  }

  render() {
  return this.props.todos.map((todo) => (
    <TodoThings key={todo.id} todo={todo} onComplete={this.props.onComplete} deleteTodo={this.props.deleteTodo}/>
  ));
  }
}



export default Todos;