import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './index.css'

export default class NavContainer extends Component {
  render() {
    return (
      <div className='noteButtonContainer'>
            <p className='titleNav'>Lambda <br />Notes</p>
          <p className='button' >View Your Notes</p>
          <Route exact path='/create-note' ><p className='button' >+Create New Note</p></Route>
      </div>
    )
  }
}

//<NavLink exact to='/create-note' ><p className='button' >+Create New Note</p></NavLink>