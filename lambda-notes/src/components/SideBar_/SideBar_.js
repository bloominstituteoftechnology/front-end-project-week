import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button_ from '../Button_/Button_';

class SideBar_ extends Component {
  render() {
    return (
      <div className="col-3 side-bar">
        <h1>Lambda Notes</h1>
        <Link to="/">
          <Button_ text="View Your Notes" />
        </Link>
        <Link to="/new">
          <Button_ text="+ Create New Note" />
        </Link>
      </div>
    );
  }
}

export default SideBar_;
