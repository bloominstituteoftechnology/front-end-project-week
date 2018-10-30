import React from 'react';
import {NavLink} from 'react-router-dom';

const CreateNote = (props) => {
    return (
        <div className ='createNoteContainer'>
        <form onSubmit={props.postHandler}>
            <h2>Create New Note:</h2>
            <input className ='titleInput' onChange={props.changeHandler} name='title' placeholder='Note Title'></input>
            <input className ='textBodyInput' onChange={props.changeHandler} name='textBody' placeholder='Note Content'></input>
            <NavLink to='/'>
                <button onClick={props.postHandler}>Save</button>
            </NavLink>
        </form>
        </div>
    );
}

export default CreateNote;