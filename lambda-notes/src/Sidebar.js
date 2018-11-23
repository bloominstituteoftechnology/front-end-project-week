import React, { Component } from 'react'

 class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="logo-wrapper">
          <i className="far fa-edit" style={{fontSize:'3rem', marginLeft:'15px'}}></i>
          <h2 className="logo">LAMBDA <span className="notes-span">NOTES</span></h2>
        </div> 

        <button className="btn btn-lg btn-info mt-4">View Your Notes</button>
         <button className="btn btn-lg btn-info mt-4">Create New Note</button>
      </div>
    )
  }
}

export default Sidebar;