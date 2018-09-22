import React, { Component } from 'react';
import './index.css';


class EditNote extends Component {
    render() {
        return (
            <div className='edit_view'>
                <form className="edit_form">
                <br /><br />
                <h3 className="edit_header">Edit Note: </h3>
                <br />
                    <input className="edit_title" type="text" placeholder="Note Title"/>
                <br /><br />
                    <textarea className="edit_content" rows="20" placeholder="Note Content"/>
                    <br />
                    <button className="edit_button">Update</button>
                </form>
            </div>
        )
    }
}

export default EditNote;

