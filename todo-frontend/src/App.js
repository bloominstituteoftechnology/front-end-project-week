import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { TodoList } from 'components/TodoList'

import { fetchTodos } from 'actions'
import 'App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <TodoList {...props} todos={this.props.todos} />}
        />

        <Route
          exact
          path="/404"
          render={() => <h3>This page is unavailable</h3>}
        />
      </div>
    )
  }
}

App.propTypes = {
  fetchTodos: PropTypes.func,
  todos: PropTypes.array
}

const mapStateToProps = state => ({
  error: state.error,
  fetchingTodos: state.fetchingTodos,
  todos: state.todos
})

export default connect(mapStateToProps, { fetchTodos })(App)

export { App }
