import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetch_todos, onHandleSubmit } from '../actions/actions';
import Todos from './Todos';
import TodoForm from './TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tags: '',
      title: '',
      textBody: ''
    }
  }

  componentDidMount() {
    this.props.fetch_todos();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('handle submit event ==', event)
    this.props.onHandleSubmit(this.state);
  }

  render() {
    // console.log('state from app render', this.state)
    return (
      <div className="App">
          {this.props.todos.map((todo, index) => {
            return (
              <Todos todo={todo} key={index} />
            )
          })}
          <TodoForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer.todos,
    fetchingTodos: state.todosReducer.fetchingTodos,
    addingTodos: state.todosReducer.addingTodos
  }
}

export default connect(
  mapStateToProps,
  {
    fetch_todos,
    onHandleSubmit
  }
)(App)
