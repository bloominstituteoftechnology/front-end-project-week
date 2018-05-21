import React, { Component } from 'react';

import Button from '../Button/Button';
import './NewNote.css';

class NewNote extends Component {
    
    state ={
        title: "",
        body: ""
    }

    render() {
        return (
            <div className="newNote-container">
                <div className="create-newNote">Create New Note:</div>
                <input className="title-input" type="text" placeholder="Note Title"></input>
                {/* <input className="content-input" type="text" placeholder="New Content"></input> */}
                <textarea class="content-input" cols="30" rows="10" type="text" placeholder="Note Content" ></textarea>
                <Button text="Save"/>
            </div>
        )
    }
}








export default NewNote;