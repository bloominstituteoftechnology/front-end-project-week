import React from 'react'
import { connect } from 'react-redux'
import LinkButton from './buttons/LinkButton'
import ActionButton from './buttons/ActionButton'
import { logoutUser } from '../state/actions'

const Sidebar = ({ sessionToken, logoutUser }) => (
  <div className="sidebar-container">
    <h1>Lambda Notes</h1>
    <LinkButton
      to='/'
      text='View Your Notes' />
    <LinkButton
      to='/create'
      text='+ Create New Note' />
    {sessionToken
      ? <ActionButton type='delete' text='Log out' onClick={logoutUser} />
      : null
    }
  </div>
)

const stateToProps = ({ sessionToken }) => ({ sessionToken })
const dispatchToProps = { logoutUser }
export default connect(stateToProps, dispatchToProps)(Sidebar)