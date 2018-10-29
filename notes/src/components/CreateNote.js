import React from 'react';

const CreateNote = (props) => {
    return (
        <form onSubmit={props.postHandler}>
            <h2>Create New Note:</h2>
            <input onChange={props.changeHandler} name='title' placeholder='Note Title'></input>
            <input onChange={props.changeHandler} name='textBody' placeholder='Note Content'></input>
            <button onClick={props.postHandler}>Save</button>
        </form>
    );
}

export default CreateNote;