import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { createNew, ListView, Navigation, NotesList } from './components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      formText: ""
    }
  }

  componentDidMount() {
    console.log(this);
    this.props.getTodos();
  }

  logTodos() {
    console.log(this.props.todos);
  }

  handleTodoText = e => {
    this.setState({
      formText: e.target.value
    });
  }

  render() {
    let name = {
      value: 'Default',
      completed: false
    }

    return (
      <div className="ToDoList">
      <input onChange={e => this.handleTodoText(e)} value={this.state.formText} type="text" placeholder='Add your To Dos here!' />
      <button onClick={() => this.props.submitTodo(this.state.formText)}>Submit</button>
      </div>

    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state,
  };
};

const mapDispatchToProps = () => {
  return {
    getTodos,
    submitTodo,
    toggleTodo
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
