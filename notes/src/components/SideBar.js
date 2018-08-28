import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import

class SideBar extends Component {
  render() {
  return (
    <div className="sidenav">
      <Link className="li" to ="/notes" href="#about">View Your Notes</Link>
      <Link className="li" to = "/new" ref="#services">Create New Note</Link>
    </div>
  );
}
};

export default SideBar;
