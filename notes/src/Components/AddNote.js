import React from 'react';
import { Link } from 'react-router-dom';

const AddNote = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="note" onChange={props.handleInput} placeholder="New Note" value={props.namevalue} />
            <input type="text" name="data" onChange={props.handleInput} placeholder="Note Text" value={props.datavalue} />
            <button type="submit" onSubmit={props.handleSubmit}>New Note</button>
        </form>
    )
}

export default AddNote;