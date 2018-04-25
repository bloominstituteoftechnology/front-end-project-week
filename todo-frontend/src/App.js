import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TodoList } from 'components/TodoList'

import { fetchTodos } from 'actions'

const AppWrapper = styled.main`
  text-align: center;
`

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  render() {
    return (
      <AppWrapper>
        <Route
          exact
          path="/"
          render={props => <TodoList {...props} todos={this.props.todos} />}
        />

        <Route render={() => <h3>This page is unavailable</h3>} />
      </AppWrapper>
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
