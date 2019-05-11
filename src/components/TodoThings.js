import React, { Component } from 'react';
import { genericTypeAnnotation } from '@babel/types';


class TodoThings extends Component { 
  myStyle = () => {
   return {
     background: 'grey',
     padding: '5px',
     borderBottom: '2px black solid',
     textDecoration: this.props.todo.completed ?
     'line-through' : 'none'
   }
  }

  

  render() {
    const { id, title  } = this.props.todo;
    return ( 
      <div style={this.myStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.onComplete.bind(this, id)} /> {' '}
        { title }
        <button onClick={this.props.deleteTodo.bind(this, id)}style={btnStyle}>X</button></p>
      </div>
      ) 
    }
  }

  const btnStyle = {
    background: 'white',
    color: 'red',
    cursor: 'pointer',
    float: 'right'
  }





export default TodoThings;