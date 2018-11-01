import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { setSearchBoolean } from "../actions";
import DownloadCSV from './DownloadCSV';
import {downloadNotesToCSV} from '../util';

 const SideMenu = (props) => {
 

  const downloadCSV = () =>{
    downloadNotesToCSV(props.notes);
  }


  return (
    <div className="sideMenu">
     <h2> Lambda<br /> Notes</h2>
     <Link to="/">
       <button onClick={() => props.setSearchBoolean(false)}>View Your Notes</button>
     </Link>
     <Link to="/addNote">
      <button>+ Create New Notes</button>
     </Link>

     <DownloadCSV notes={props.notes}  downloadCSV={downloadCSV}/>
     </div>
  
  );
}




const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default 
  connect(
    mapStateToProps,
    { setSearchBoolean }
  )(SideMenu)
;
