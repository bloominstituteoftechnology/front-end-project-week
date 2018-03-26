import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SideBar extends Component {
  render() {
    return (
      <div className='sideBar-Contents'>
        <h1>Lambda Notes</h1>
        <Button className='sideBar-Button view'>View Your Notes</Button>
        <Button className='sideBar-Button create'>+ Create New Note</Button>
      </div>
    );
  }
}

export default SideBar;