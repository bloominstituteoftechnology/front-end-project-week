import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default class Navigation extends Component {
  render() {
    return(
      <div className='navigation'>
        <h1>Lambda Notes</h1>
        <NavLink exact to='/'>View Your Notes</NavLink>
        <NavLink to='/new'>+ Create New Note</NavLink>
      </div>
    );
  }
}