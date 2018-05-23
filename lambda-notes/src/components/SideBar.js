import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = props => {
    return (
        <div className="sidebar"> 
            <h1>Lamda<br/>Notes</h1>
            <Link to={"/"} className="button">View Your Notes</Link>
            <Link to={""}className="button">+ Create New Note</Link>
        </div>
    )
}

export default SideBar;