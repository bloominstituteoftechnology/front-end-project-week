import React, { Component } from 'react';

class NoteCard extends Component {
  render() {
    return (
      <div className='notecard'>
        <div className='cardTitle'>{this.props.title}</div>
        <hr/>
        <div className='cardBody'>
        {(this.props.body.substring(0,156)) + (this.props.body.length >156 ? " ..":"") }
        </div>
        
      </div>
    );
  }
}

export default NoteCard;