import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Content, Create, Edit, Note, SideMenu } from './components'
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

  Content = () => <Content notes={this.state.notes} />

  Note = ({ match: { params: { id } } }) => {
    const note = this.state.notes.filter(note => note.id === +id)[0]
    return <Note {...note} />
  }

  Create = () => <Create />

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SideMenu />
          <Route exact path="/" render={this.Content} />
          <Route path="/note/:id" render={this.Note} />
          <Route path="/create/" render={this.Create} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
