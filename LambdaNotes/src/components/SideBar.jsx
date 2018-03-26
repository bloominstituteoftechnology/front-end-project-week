import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div className='sideBar-Contents'>
        <h1>Lambda Notes</h1>
        <Link to={'/'}>
          <Button className='sideBar-Button view'>View Your Notes</Button>
        </Link>
        <Link to={`/create`}>
          <Button className='sideBar-Button create'>+ Create New Note</Button>
        </Link>
      </div>
    );
  }
}

export default SideBar;