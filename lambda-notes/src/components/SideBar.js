import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { CSVLink } from 'react-csv';

const SideBar = (props) => {
    return (
        <div className="side-bar">
            <h1>Lambda<br/>Notes</h1>
            <button><NavLink to="/" className="button">View Your Notes</NavLink></button>
            <button><NavLink to="/create-note" className="button">+ Create New Note</NavLink></button>
            <button><CSVLink data={props.notes} className="button">Download Notes</CSVLink></button>
        </div>
    );
};

export default SideBar; 
