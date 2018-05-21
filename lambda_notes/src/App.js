import React, { Component, Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import { addNote, editNote, getNotes } from './actions'
import { Content, Create, Edit, Note, SideMenu } from './components'

class App extends Component {
  componentDidMount() {
    this.props.getNotes()
  }

  handleSubmit = note => {
    this.props.addNote(note)
    this.props.history.push('/')
  }

  Create = () => <Create onSubmit={this.handleSubmit} enableReinitialize />

  Edit = (props) => {
    const handleEdit = note => {
      this.props.editNote(note, props.match.params.id)
      this.props.history.push('/')
    }
    return <Edit {...props} onSubmit={handleEdit} enableReinitialize />
  }

  render() {
    return <Fragment>
      <SideMenu />
      <div className='Content__container'>
        <Route exact path='/' component={Content} />
        <Route path='/note/:id' component={Note} />
        <Route path='/create/' render={this.Create} />
        <Route path='/edit/:id/' render={this.Edit} />
      </div>
    </Fragment>
  }
}

export default compose(
  withRouter,
  connect(({ notes: { notes, transcript } }) => ({ notes, transcript }),
  { addNote, editNote, getNotes })
)(App)
