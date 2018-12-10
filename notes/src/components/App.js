import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetch_todos, onHandleSubmit, onUpdateTodos, onDeleteTodos } from '../actions/actions';
import Todos from './Todos';
import TodoForm from './TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      title: '',
      textBody: '',
      id: ''
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
    // console.log('handle submit event ==', event)
    this.props.onHandleSubmit(this.state);
  }

  updateTodos = (event) => {
    event.preventDefault();
    this.props.onUpdateTodos(this.state)
  }

  deleteTodos = (event) => {
    event.preventDefault();
    this.props.onDeleteTodos(this.state)
  }

  render() {
    console.log('props from app render', this.props.todos)
    return (
      <div>
        <div>
          {this.props.todos.map((todo, index) => {
            return <Todos todo={todo} key={index} />
          })}
        </div>
        <div>
          <TodoForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            updateTodos={this.updateTodos}
            deleteTodos={this.deleteTodos}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // console.log('mapStateToProps state..', state.todosReducer)
  return {
    todos: state.todosReducer.todos,
    fetchingTodos: state.todosReducer.fetchingTodos,
    addingTodos: state.todosReducer.addingTodos,
    updatingTodos: state.todosReducer.updatingTodos,
    deletingTodos: state.todosReducer.deletingTodos
  }
}

export default connect(
  mapStateToProps,
  {
    fetch_todos,
    onHandleSubmit,
    onUpdateTodos,
    onDeleteTodos
  }
)(App)
