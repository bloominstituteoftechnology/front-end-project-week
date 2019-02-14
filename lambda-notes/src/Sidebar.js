import React, { Component } from 'react'
import {Link} from 'react-router-dom';

 class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="logo-wrapper">
          <i className="far fa-edit" style={{fontSize:'3rem', marginLeft:'15px'}}></i>
          <h2 className="logo">LAMBDA <span className="notes-span">NOTES</span></h2>
        </div> 

        <button className="btn btn-lg btn-primary mt-4"><Link to="/" className="nav-link" style ={{color:'#fff'}}>View Your Notes</Link></button>
        <button className="btn btn-lg btn-primary mt-4"><Link to="/create" className="nav-link" style ={{color:'#fff'}}>Create New Note</Link></button>
      </div>
    )
  }
}

export default Sidebar;