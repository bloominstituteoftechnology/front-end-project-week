import React from 'react';
import { NavLink } from 'react-router-dom';

const UpdateNote = props => {
        return (
            <div className='edit-view'>
                <div className='notes-sidebar'>
                    <h1 className='title'>Lambda Notes</h1>
                    <NavLink to='/' className='navlink' exact activeClassName='navlink-selected'><button onClick={props.pageReload}>View Your Notes</button></NavLink>
                    <NavLink to='/create-new-note' className='navlink' exact activeClassName='navlink-selected'><button onClick={props.pageReload}>+ Create New Note</button></NavLink>
                </div>
                <div className='new-note-section'>
                    <form className='new-note-form'>
                        <h4 className='notes-title'>Edit Note:</h4>
                        <input className='note-title-input' placeholder='Note Title'></input>
                        <input className='note-content-input' placeholder='Note Content'></input>
                        <button>Save</button>
                    </form>
                </div>
            </div>
        )
}
export default UpdateNote;