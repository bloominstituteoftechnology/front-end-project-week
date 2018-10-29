import React, { Component } from 'react'
import './index.css'

export default class NavContainer extends Component {
  render() {
    return (
      <div className='noteButtonContainer'>
            <p className='title'>Lambda <br />Notes</p>
          <p className='button' >View Your Notes</p>
          <p className='button' >+Create New Note</p>
      </div>
    )
  }
}