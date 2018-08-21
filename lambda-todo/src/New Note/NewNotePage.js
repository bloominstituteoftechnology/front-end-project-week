import React from "react";
import './NewNotePage.css'; 
import {NavLink} from 'react-router-dom'; 

const NewNotePage = props =>{
        return(
            <div className="new-note">
            <h1>Create New Note</h1>
            <div className="new-note-inputs">
                <input
                placeholder="Title"
                type="text"
                className="title-input"
                onChange={props.handleInputChange}
                value={props.value.title}
                />
                  <input
                placeholder="Card Content"
                type="text"
                className="title-input"
                onChange={props.handleInputChange}
                value={props.value.cardcontent}
                />
                <input 
                placeholder="Content"
                type="text"
                className="content-input"
                onChange={props.handleInputChange}
                value={props.value.content}
                />
                <NavLink onClick={props.handleAddNote} className="nav-btn"to='/'>
                Add New Note
                </NavLink>
            </div>
            </div>
        )
    }

export default NewNotePage; 