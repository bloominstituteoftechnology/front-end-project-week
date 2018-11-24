import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Sidebar'>
        <h1>Lambda Notes</h1>
        <div>View Your Notes</div>
        <div>+ Create New Note</div>
      </div>
    )
  }
}
