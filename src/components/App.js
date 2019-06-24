import React from 'react'
import { Route } from 'react-router'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Sidebar from './Sidebar'
import Flash from './Flash'
import Authentication from './Authentication'
import NoteList from './note/NoteList'
import NoteDetail from './note/NoteDetail'
import NoteCreate from './note/NoteCreate'
import NoteEdit from './note/NoteEdit'

const App = ({ sessionToken }) => (
  <div className="app">
    <Sidebar />
    <div className="main-container">
    <Flash />
    { 
      sessionToken
        ? <div>
            <Route exact path='/' component={NoteList} />
            <Route path='/create' component={NoteCreate} />
            <Route path='/edit/:id' component={NoteEdit} />
            <Route path='/show/:id' component={NoteDetail} />
          </div>
        : <Authentication />
    }
    </div>
  </div>
)

const mapStateToProps = ({ sessionToken }) => ({ sessionToken })
export default compose(
  withRouter,
  connect(mapStateToProps)
)(App)