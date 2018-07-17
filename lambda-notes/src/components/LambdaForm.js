import React from 'react';
import { Link } from 'react-router-dom';

const LambdaForm = props => {
    return(
        <Link to="/form">
        <div>
        <h1>Create New Note:</h1>
        <form>
            <input type="text" name="title" placeholder="Note Title" onChange={props.handleChange} value={props.title} />
            <textarea type="text" name="body" placeholder="Note Content" onChange={props.handleChange} value={props.body} />
            <button onClick={props.handleAddnote}>Save</button>
        </form>
        </div>
        </Link>
    )
}

export default LambdaForm;