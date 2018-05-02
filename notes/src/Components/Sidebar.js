import React, { Component } from 'react';

import Button from './Button';

class Sidebar extends Component {
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
        {this.state.buttons.map(button => {
          return <Button button={button} />
        })}
      </div>
    );
  }
}

export default Sidebar;