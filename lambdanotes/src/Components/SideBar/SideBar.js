import React, { Component } from 'react';
import './SideBar.css';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return (
        <div className = 'sideBar'>
            <div className = 'logo'>
                <h1>Lambda Notes</h1>
            </div>   
            <Link to='/note'>View Your Notes</Link>
            <Link to='/new'>+Create New Note</Link>
        </div>
    )
}


export default SideBar;