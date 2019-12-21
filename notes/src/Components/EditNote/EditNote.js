import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import './EditNote.css';

class EditNote extends Component {

    render() {
        console.log('props', this.props.editNote);
        return (
            <div className='edit-container'>
                <Menu />
                <div className='input-container'>
                    <h2>
                        Edit Note:
                    </h2>
                    <input
                        className='new-note-title'
                        placeholder='Note Title'
                        name='title'
                        onChange={this.inputHandleChange}
                        // value={this.state.title}
                    />
                    <textarea
                        className='note-content'
                        placeholder='Note Content'
                        name='body'
                        onChange={this.inputHandleChange}
                        // value={this.state.body}
                    />
                    <Link to='/' className='save-button' onClick={this.editNote}>
                        Update
                    </Link>
                </div>
            </div>
        )
    }
}

export default EditNote;