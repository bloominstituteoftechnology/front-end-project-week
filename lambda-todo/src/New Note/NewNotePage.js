import React, { Component } from "react";
import './NewNotePage.css'; 
import {NavLink} from 'react-router-dom'; 

class NewNotePage extends Component{
    render(){
        return(
            <div className="new-note">
            <h1>Create New Note</h1>
            <div className="new-note-inputs">
                <input
                placeholder="Title"
                type="text"
                className="title-input"
                />
                <input 
                placeholder="Content"
                type="text"
                className="content-input"
                />
                <NavLink className="nav-btn"to='/'>
                Add New Note
                </NavLink>
            </div>
            </div>
        )
    }
}
export default NewNotePage; 