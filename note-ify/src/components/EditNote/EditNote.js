import React, { Component } from 'react';
import './index.css'

class EditNote extends Component {
    render() {
        return (
            <div>
                <div className='noteView_container'>
                    <div className="noteView_topContent">
                        <h3 className='content_header'>
                            Edit Note:
                        </h3>
                    </div>
                    <div className='createNote_form'>
                        <input
                            type='text'
                            className='createNote_title'
                            placeholder='Note Title'
                        />
                        <textarea
                            className='createNote_body'
                            placeholder='Note Content'
                            rows="20"
                        />
                        <a href="#" className='button_link'>
                            <div className='createNote_button'>Update</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditNote;