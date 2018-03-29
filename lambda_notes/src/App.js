import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Content, SideMenu } from './components'
import notes from './notes'

class App extends Component {
  state = {
    notes: [],
    note: {
      id: null,
      title: '',
      text: ''
    }
  }

  componentDidMount() {
    this.setState({ notes })
  }

  Content = props => <Content notes={this.state.notes} />

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SideMenu />
          <Route exact path='/' render={this.Content} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
