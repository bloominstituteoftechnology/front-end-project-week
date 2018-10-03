import React from 'react';

const CreateNote = props => {
    return (
        <div className="group">
            <input 
                type= 'text'
                onChange = {props.handleInputChange}
                placeholder = 'Title'
                name= 'Title'
                value= {props.title}
            />
            <input 
                type= 'text'
                onChange = {props.handleInputChange}
                placeholder = 'Text Body'
                name= 'textBody'
                value= {props.textBody}
            />
            <button 
                onClick={props.addNote}
            >
            Save
            </button>
        </div>
    );
};

export default CreateNote;