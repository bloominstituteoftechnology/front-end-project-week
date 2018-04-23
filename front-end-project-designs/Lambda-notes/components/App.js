import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchTodos, createTodo } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    todo: ''
  };
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div className="App">
        {this.props.pending ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
          <h1 className="App-title">Todos</h1>
          <input
          type="text"
          placeholder="todo"
          name="todo"
          value={this.state.todo}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.createTodo({ todo: this.state.todo });
            this.setState({ todo: '' });
          }}
        >
          Add a Todo
        </button>
        {this.props.error !== null ? <h4>{this.props.error}</h4> : null}
        <ul>
          {this.props.todos.map(todo => <li key={todo.name}>{todo.name}</li>)}
        </ul>
      </div>
    );
  }
}
// handler
const mapStateToProps = state => {
  return {
    todos: state.todos,
    error: state.error,
    pending: state.pending,
    createTodo: state.createTodo
  };
};

export default connect(mapStateToProps, { fetchTodos,createTodo })(App);