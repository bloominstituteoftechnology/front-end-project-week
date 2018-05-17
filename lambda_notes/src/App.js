import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { Route, withRouter } from 'react-router-dom'
import { Content, Create, Edit, Note, SideMenu } from './components'
// import firebase from './firebase.js'

import { connect } from 'react-redux'
import { addNote, getNotes } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.getNotes()
  }

  handleSubmit = note => {
    // const { addNote, history, notes } = this.props
    // addNote(note, notes.length)
    // history.push('/')
  }
  
  handleEdit = note => {
    console.log(note)
  }
  // handleEdit = async ({ db, id, text, title }) =>
  //   await firebase
  //     .database()
  //     .ref(`/notes/${db}`)
  //     .set({ id, text, title })

  // getNote = id => this.state.notes.find(note => note.id === id)

  Create = () => <Create onSubmit={this.handleSubmit} enableReinitialize />

  Edit = () => <Edit onSubmit={this.handleEdit} enableReinitialize />
  // Edit = props => {
  //   const note = this.getNote(+props.match.params.id)
  //   return <Edit {...props} {...note} submit={this.handleEdit} />
  // }

  render() {
    // console.log(this.props)
    return <Fragment>
      <SideMenu />
      <div className="Content__container">
        <Route exact path="/" component={Content} />
        <Route path="/note/:id" component={Note} />
        <Route path="/create/" render={this.Create} />
        <Route path="/edit/:id/" render={this.Edit} />
      </div>
    </Fragment>
  }
}

export default compose(
  withRouter,
  connect(({ notes: { notes, transcript } }) => ({ notes, transcript }),
  { addNote, getNotes })
)(App)
