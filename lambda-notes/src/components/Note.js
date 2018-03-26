import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote';
//import PropTypes from 'prop-types';

const Note = props => {
    
    const handleDelete = () => {
        props.history.push('/');
    }

    return (
        <div className="Note">
            <div className="Note__nav">
                <Link to={`/notes/${props.location.state.currentNote.id}/EditNote`}>edit</Link>
                <DeleteNote delete={handleDelete}/>
            </div>
            <h5>{props.location.state.currentNote.title}</h5>
            <h5>{props.location.state.currentNote.text}</h5>
        </div>
    );
};

// Note.propTypes = {
    
// };

export default Note;