import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';


export default class Sidebar extends Component {
  state = {
    buttons: [
      { text: 'View Your Notes', route: '/',},
      { text: '+ Create New Note', route: '/create',} 
    ]
  }
  render() {
    return(
      <div className="sidebar">
        <h1 className="brand">Lambda Notes</h1>
        {this.state.buttons.map((button, i) => {
          return (
            <Link to={button.route} key={i}>
              <Button text={button.text} key={i}/>
            </Link>
          )
        })}
      </div>
    );
  }
}