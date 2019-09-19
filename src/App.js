import React, { Component } from 'react';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';
import DataTodo from './components/DataForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-12" key={i}>
          <table class="table">
            
            <tbody>
              <tr>
                <td className="md-1">{todo.partidaP}</td>
                <td className="md-1">{todo.cantidad}</td>
                <td className="md-2">{todo.unidadMedida}</td>
                <td className="md-2">{todo.description}</td>
                <td className="md-1">{todo.importe}</td>
                <td className="md-1"><button
                  className="btn btn-danger"
                  onClick={this.removeTodo.bind(this, i)}>
                  Delete
              </button></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            SOLICITUD DE MATERIALES Y/O SERVICIOS
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <DataTodo onAddTodo={this.handleAddTodo}></DataTodo>
        </div>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
            <thead>
              <tr>
                <th scope="col-md-1">Partida presupuestal</th>
                <th scope="col-md-1">Cantidad</th>
                <th scope="col-md-2">Unidad de medida</th>
                <th scope="col-md-2">Descripción clara y precisa</th>
              </tr>
            </thead>
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

