import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { setSearchBoolean } from "../actions";

 const SideMenu = (props) => {
 
  return (
    <div className="sideMenu">
     <h2> Lambda<br /> Notes</h2>
     <Link to="/">
       <button onClick={() => props.setSearchBoolean(false)}>View Your Notes</button>
     </Link>
     <Link to="/addNote">
      <button>+ Create New Notes</button>
     </Link>
     </div>
  
  );
}



const mapStateToProps = () => {};

export default 
  connect(
    mapStateToProps,
    { setSearchBoolean }
  )(SideMenu)
;
