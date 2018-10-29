import React, { Component } from 'react'
import './index.css'

export default class NavContainer extends Component {
  render() {
    return (
      <div className='todoButtonContainer'>
            <p>Navigation</p>
          <button className='button' >+Create Todo</button>
          <button className='button' >Completed Todos</button>
      </div>
    )
  }
}