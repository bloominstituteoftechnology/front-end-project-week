import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {

  shouldComponentUpdate = (nextProps, nextState) => false;

  render = () => {
    return (
      <div className='side-bar'>
      	<div>
      		<h1>Lambda Notes</h1>
      		<button><Link to="/">View Notes</Link></button>
      		<button><Link to="./Add-Note">+ Add New Note</Link></button>
      	</div>
      </div>
    );
  }
}