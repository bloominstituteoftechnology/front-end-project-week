import React, { Component } from 'react';
import './Sidebar.css'

import Notecard from './Notecard'

class Notelist extends Component {
  state = {
    notes: this.props.notes
  }
  render() {
    return (
      <div>
        {this.props.notes.map(note => {
            return <div><Notecard key={note.id} note={note} /></div>
        })}
      </div>
    );
  }
}

export default Notelist;


