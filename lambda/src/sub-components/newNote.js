import React from 'react';
import { NavLink } from 'react-router-dom';

const NewNote = props => {
        return (
            <div className='create-view'>
                <div className='notes-sidebar'>
                    <h1 className='title'>Lambda Notes</h1>
                    <NavLink to='/' className='navlink' exact activeClassName='navlink-selected'><button onClick={props.pageReload}>View Your Notes</button></NavLink>
                    <NavLink to='/create-new-note' className='navlink' exact activeClassName='navlink-selected'><button onClick={props.pageReload}>+ Create New Note</button></NavLink>
                </div>
                <div>
                    <h4 className='notes-title'>Create New Note:</h4>
                    <input className='note-title-input' placeholder='Note Title'></input>
                    <input className='note-content-input' placeholder='Note Content'></input>
                    <button>Save</button>
                </div>
            </div>
        )
}
export default NewNote;