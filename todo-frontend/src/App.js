import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from 'actions'
import logo from 'logo.svg'
import 'App.css'

class App extends Component {
  componentDidMount () {
    this.props.fetchTodos()
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  fetchingTodos: state.fetchingTodos,
  todos: state.todos
})

export default connect(mapStateToProps, {fetchTodos})(App)
