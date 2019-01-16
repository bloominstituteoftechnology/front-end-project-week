import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import DownloadCSV from './DownloadCSV';
import {downloadNotesToCSV} from '../util';
import {setSearchBoolean} from '../actions'


// SideMenu component handles left side menu
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

     <DownloadCSV notes={props.notes}  downloadCSV={()=>{downloadNotesToCSV(props.notes)}}/>
     </div>
  
  );
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default 
  connect(
    mapStateToProps,
    {setSearchBoolean}
  )(SideMenu)
;
