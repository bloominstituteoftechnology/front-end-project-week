import React from 'react';
import { Link } from 'react-router-dom';
import { CSVLink, CSVDownload } from "react-csv";
import '../components.css';
import './index.css';
const SideBar = props => {
  return (
    <div>
      <div className="sidebar-wrapper">
        <h1>Lambda<br />Notes</h1>
        <Link to="/"><button>View Your Notes</button></Link>
        <Link to="/notes/add"><button>+ Create New Note</button></Link>
        
        <input
          type="text"
          name="search"
          maxLength="20"
          placeholder="search..."
          value={props.search}
          onChange={props.handleSearchChange}
        />
        <CSVLink className="csv-export" filename={"notes-export.csv"}data={props.notes}>Export To CSV</CSVLink>
      </div>
    </div>
  );
}

export default SideBar;
