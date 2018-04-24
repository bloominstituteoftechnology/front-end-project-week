import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { TodoList } from 'components/TodoList'
import { Todo } from 'components/Todo'

import { fetchTodos } from 'actions'
import { getSingleTodo } from 'utils'
import 'App.css'

class App extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }

  render () {
    return (
      <div className='App'>
        <Route exact path='/' render={props => <TodoList {...props} todos={this.props.todos} />} />
        {/* single todo view */}
        <Route path='/:id' render={props => <Todo {...getSingleTodo(props.match.params.id, this.props.todos)} />} />
        {/* 404 page */}
        {/* <Route render={() => <h3>This page is unavailable</h3>} /> */}
      </div>
    )
  }
}

App.propTypes = {
  fetchTodos: PropTypes.func,
  getSingleTodo: PropTypes.func,
  todos: PropTypes.array
}

const mapStateToProps = state => ({
  error: state.error,
  fetchingTodos: state.fetchingTodos,
  todos: state.todos
})

export default connect(mapStateToProps, {fetchTodos})(App)

export { App }
