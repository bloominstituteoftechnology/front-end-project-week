import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  fetch_todos,
  onHandleSubmit,
  onUpdateTodos,
  onDeleteTodos,
  onFilterTodos,
  onSortTodos,
  onExportCSV
} from "../actions/actions";
import Todos from "./Todos";
import TodoForm from "./TodoForm";
import TodoSearch from "./TodoSearch";
import TodosList from "./TodosList";
import SingleTodoView from "./SingleTodoView";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { Route, Link, Switch } from "react-router-dom";

import Testing from "./Testing";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      title: "",
      textBody: "",
      id: "",
      filterInput: ""
    };
  }

  componentDidMount() {
    this.props.fetch_todos();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log('handle submit event ==', event)
    this.props.onHandleSubmit(this.state);
  };

  updateTodos = event => {
    event.preventDefault();
    this.props.onUpdateTodos(this.state);
  };

  deleteTodos = event => {
    event.preventDefault();
    this.props.onDeleteTodos(this.state);
  };

  filterTodos = event => {
    event.preventDefault();
    this.props.onFilterTodos(this.state.filterInput);
  };

  sortTodos = event => {
    event.preventDefault();
    console.log("Sorting!");
    this.props.onSortTodos();
  };

  exportCSV = event => {
    event.preventDefault();
    this.props.onExportCSV(this.state);
  };

  render() {
    console.log("state from render", this.state);
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <TodosList
                {...props}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                updateTodos={this.updateTodos}
                deleteTodos={this.deleteTodos}
                reduxProps={this.props}
                sortTodos={this.sortTodos}
                filterTodos={this.filterTodos}
              />
            )}
          />
          <Route
            path="/todoForm"
            render={props => (
              <TodoForm
                {...props}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                updateTodos={this.updateTodos}
                deleteTodos={this.deleteTodos}
              />
            )}
          />
          <Route
            path="/:id"
            render={props => (
              <SingleTodoView {...props} reduxProps={this.props} />
            )}
          />
          {/* <Route path="toCardOne" render={props => <SingleTodoView />} /> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  // console.log('mapStateToProps state..', state.todosReducer)
  return {
    todos: state.todosReducer.todos,
    fetchingTodos: state.todosReducer.fetchingTodos,
    addingTodos: state.todosReducer.addingTodos,
    updatingTodos: state.todosReducer.updatingTodos,
    deletingTodos: state.todosReducer.deletingTodos
  };
};

export default connect(
  mapStateToProps,
  {
    fetch_todos,
    onHandleSubmit,
    onUpdateTodos,
    onDeleteTodos,
    onFilterTodos,
    onSortTodos,
    onExportCSV
  }
)(App);
