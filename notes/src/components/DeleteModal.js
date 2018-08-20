import React from 'react';
import { Route, Link } from 'react-router-dom';

const DelModal = (props) => {
    return(
        <div className="delete-modal">
            <p>Are you sure you want to delete this?</p>
            <button>Delete</button>
            <button><Link to={`/notes/${props.id}`} /></button>
            <Route path={`/notes/${props.id}`} component={Note} />
        </div>
    )
}

export default DelModal;