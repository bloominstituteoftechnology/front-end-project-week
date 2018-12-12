import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'


export default class NavContainer extends Component {
  render() {
    return (
      <div className='noteButtonContainer'>
            <p className='titleNav'>Lambda <br />Notes</p>
            <div className='navDiv'> 
            <NavLink exact to="/" className='button'>View Your Notes</NavLink>  
          <NavLink exact to="/create-note" className='button'>+Create New Note</NavLink>   
          </div>
      </div>
    )
  }
}

