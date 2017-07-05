import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
  {
   todoTitle: 'My first todo',
    todoResponsible: 'Xing',
    todoDescription: 'My first todo description',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My second todo',
    todoResponsible: 'Xing',
    todoDescription: 'My second todo description',
    todoPriority: 'hign'
  },
  {
    todoTitle: 'My third todo',
    todoResponsible: 'Xing',
    todoDescription: 'My third todo description',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My forth todo',
    todoResponsible: 'Xing',
    todoDescription: 'My forth todo description',
    todoPriority: 'high'
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i){
        return i !== index;
      })
    });
  }

  render() {
    return (
      <div className="container">
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="label label-info">{todo.todoPriority}</span></small></h4>
              <p><span className="glyphicon glyphicon-user"></span> {todo.todoResponsible}</p>
              <p>{todo.todoDescription}</p>
              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span></button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
