import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">Lambda Notes</div>
        <Link to="/a/list"><button className="viewnote">View Your Notes</button></Link><br/>
        <Link to="/a/addnote"><button>+ Create New Note</button></Link>
        <br /><br /><br /><br />
        <div className="signout" onClick={()=>{this.handleSignOut()}}>Sign out</div>
      </div>
    );
  }
}


export default SideBar;