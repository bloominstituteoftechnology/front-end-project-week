import React, { Component } from 'react';

class OneNote extends Component {
  render() {
    console.log(this.props);
    return (
      <li className='OneNote'>
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.description}</p>
      </li>
    );
  }
}

export default OneNote;
