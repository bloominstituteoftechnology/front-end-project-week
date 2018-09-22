import React, { Component } from 'react';
import './index.css';

class CreateNote extends Component {
    render() {
        return (
            <div className='create_view'>
                <form className="create_form">
                    <h3 className="create_header">Create New Note: </h3>
                    <br />
                    <input className="create_title" type="text" placeholder="Note Title"/>
                    <br /><br />
                    <textarea className="create_content" rows="20" placeholder="Note Content"/>
                    <br />
                    <button className="create_button">Save</button>
                </form>
            </div>
        )
    }
}

export default CreateNote;