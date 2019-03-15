import React, { Component } from 'react';
import './editNote.css';


const EditNote = () => {
    return (
        <div className="noteView-Container">
            <div className="noteView-Content">
                <h4>Edit Note:</h4>
             </div>
        <div className="createNote-Form">
            <input type="text" className="createNote-Title" placeholder="Note Title" />
            <textarea className="createNote-Text" placeholder="Note Content" rows="20" />
             <a href="#"><button className="save-button">Update</button></a>
            </div>
        </div>
            );
        }
        

export default EditNote;