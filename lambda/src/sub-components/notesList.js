import React from 'react';
import { NavLink } from 'react-router-dom';

const NotesList = props => {
        return (
            <div className='list-view'>
                <div className='notes-sidebar'>
                    <h1 className='title'>Lambda Notes</h1>
                    <NavLink to='/' className='navlink' exact activeClassName='navlink-selected'><button onClick={props.pageReload}>View Your Notes</button></NavLink>
                    <NavLink to='/create-new-note' className='navlink' exact activeClassName='navlink-selected'><button onClick={props.pageReload}>+ Create New Note</button></NavLink>
                </div>
                <div className='notes-section'>
                    <h3 className='notes-title'>Your Notes:</h3>
                    <input className='notes-search' placeholder='Search'></input>
                    {props.notesList.map((eachNote) => {
                        return (
                            <NavLink to={`/note/${eachNote._id}`} key={eachNote._id} className='navlink' exact activeClassName='navlink-selected' >
                                <div onClick={props.pageReload}>
                                    <div id={eachNote._id} className='each-note' >
                                        <h4 className='each-note-title'>{eachNote.title}</h4>
                                        <p>{eachNote.textBody}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        );
}


export default NotesList;