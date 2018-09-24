import React from "react";
import {Link } from 'react-router-dom'

const SideBar = () => {
  return(
  <div className={'sidebar'}>
    <h1>Lambda<br></br> School</h1>
    <Link to='/'>
    <h3 className="button">View Your Notes</h3>
    </Link>
 
    <Link to='/addnote'>
    <h3 className="button">+ Create New Note</h3>
    </Link>
  </div>
  )
};

export default SideBar;