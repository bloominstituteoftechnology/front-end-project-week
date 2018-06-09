import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <input type="text" name= "note-name" className="input-text" placeholder="Note Title"/>
                <input type="text" name= "note-content" className="input-text-area" placeholder="Note Content"/>
                <div className="button save-button">Save</div>
            </div>
        );
    }
}

export default Form;
