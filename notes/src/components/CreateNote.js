import React, { Component } from 'react';
import { Button } from 'reactstrap';
import CreateStyles from './CreateNote.css';

const CreateNote = () => {
    return (
        <div className='Container'>
            <h2>Create New Note:</h2>
            <div className='Create-Container'>
                <input className="Title-Input"
                  type='text'
                  placeholder="Note Title"
                  name="title"
                />
                <input className="Content-Input"
                  type='text'
                  placeholder="Note Content"
                  name="content"
                />
                <Button className='Save-Button'>Save</Button>
            </div>
        </div>
    )
}

export default CreateNote