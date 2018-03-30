import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Content, Create, Edit, Note, SideMenu } from './components'
import firebase from './firebase.js'

class App extends Component {
  state = {
    note: { text: '', title: '' },
    notes: []
  }

  async componentDidMount() {
    await firebase.database().ref('notes').on('value', snapshot => {
      const notes = Object
        .entries(snapshot.val())
        .map(([key, val]) => ({...val, db: key}))
      this.setState({ notes })
    })
  }

  handleFormChange = ({ target: { name, value } }) =>
    this.setState({ note: { ...this.state.note, [name]: value } })

  handleFormSubmit = async id => {
    await firebase.database().ref('notes').push({...this.state.note, id})
    this.setState({ note: { text: '', title: '' } })
  }

  handleEdit = async ({ db, id, text, title }) =>
    await firebase.database().ref(`/notes/${db}`).set({ id, text, title })

  handleDelete = async id =>
    await firebase.database().ref(`/notes/${id}`).remove()

  getNote = id => this.state.notes.find(note => note.id === id)

  Content = () => <Content notes={this.state.notes} />

  Note = props => {
    const note = this.getNote(+props.match.params.id)
    return <Note {...props} {...note} del={this.handleDelete} />
  }

  Create = props => {
    const id = this.state.notes.length
    return (
      <Create
        {...props}
        {...this.state.note}
        id={id}
        change={this.handleFormChange}
        submit={this.handleFormSubmit}
      />
    )
  }

  Edit = props => {
    const note = this.getNote(+props.match.params.id)
    return <Edit {...props} {...note} submit={this.handleEdit} />
  }

  render() {
    console.log(this.state)
    return (
      <BrowserRouter>
        <Fragment>
          <SideMenu />
          <div className="Content__container">
            <Route exact path="/" render={this.Content} />
            <Route path="/note/:id" render={this.Note} />
            <Route path="/create/" render={this.Create} />
            <Route path="/edit/:id/" render={this.Edit} />
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App
