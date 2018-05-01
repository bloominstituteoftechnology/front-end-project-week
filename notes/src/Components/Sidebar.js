import React, { Component } from 'react';

import Button from './Button';

class Sidebar extends Component {
  state = {
    buttons: ['View Your Notes', '+ Create New Note']
  }
  render() {
    return(
      <div className="sidebar">
        <h1 className="brand">Lambda Notes</h1>
        {this.state.buttons.map(button => {
          return <Button text={button} />
        })}
      </div>
    );
  }
}

export default Sidebar;