import React, { Component } from 'react';

class NoteCard extends Component {
  render() {
    return (
      <div className='notecard'>
        <div className='cardTitle'>{this.props.title}</div>
        <hr/>
        <div className='cardBody'>
        {this.props.body}
        </div>
        
      </div>
    );
  }
}

export default NoteCard;