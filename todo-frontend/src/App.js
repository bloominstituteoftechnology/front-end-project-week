import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { TodoList } from 'components/TodoList'
import { Sidebar } from 'components/Sidebar'
import { AddTodoForm } from 'components/AddTodoForm'

import { fetchTodos, createTodo } from 'actions'

const AppWrapper = styled.main`
  text-align: center;
  display: grid;
  grid-template-columns: 25% 1fr;
`

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  render() {
    return (
      <AppWrapper>
        <Sidebar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <TodoList {...props} todos={this.props.todos} />}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/new"
            render={props => (
              <AddTodoForm
                {...props}
                addTodo={nTodo => this.props.createTodo(nTodo)}
              />
            )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/404"
            render={() => <h3>This page is unavailable</h3>}
          />
        </Switch>
      </AppWrapper>
    )
  }
}

App.propTypes = {
  fetchTodos: PropTypes.func,
  createTodo: PropTypes.func,
  todos: PropTypes.array
}

const mapStateToProps = state => ({
  error: state.error,
  fetchingTodos: state.fetchingTodos,
  todos: state.todos
})

export default connect(mapStateToProps, { fetchTodos, createTodo })(App)

export { App }
