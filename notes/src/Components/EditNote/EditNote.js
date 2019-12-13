import React, { Component } from 'react';
<<<<<<< HEAD:notes/src/Components/EditNote.js
import SideMenun from './SideMenu';
=======
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import './EditNote.css';
>>>>>>> cb5ed60e989ee41ecab4bda4c6ed01c1058c14f5:notes/src/Components/EditNote/EditNote.js

class EditNote extends Component {

    render() {
        return (
<<<<<<< HEAD:notes/src/Components/EditNote.js
            <div>
                Edit note
=======
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
                        value={this.state.title}
                    />
                    <textarea
                        className='note-content'
                        placeholder='Note Content'
                        name='body'
                        onChange={this.inputHandleChange}
                        value={this.state.body}
                    />
                    <Link to='/' className='save-button' onClick={this.editNote}>
                        Update
                    </Link>
                </div>
>>>>>>> cb5ed60e989ee41ecab4bda4c6ed01c1058c14f5:notes/src/Components/EditNote/EditNote.js
            </div>
        )
    }
}

export default EditNote;