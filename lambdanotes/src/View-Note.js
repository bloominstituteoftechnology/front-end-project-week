import React from 'react';
import { Link } from 'react-router-dom';

const ViewNote = (props) => {
    return (
        <div>
            <Link to={`/${props.id}/${props.title}/${props.content}/DeleteModal`}><button type='submit'>delete</button></Link>
            <button type='submit'>update</button>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
        )
}

export default ViewNote;