import React from 'react';

import { Link } from 'react-router-dom';

const ViewNotesButton = props => {
    return (
        <div>
            <Link to="/notes">
                <button className="sbButtons">View Your Notes</button>
            </Link>
        
        </div>
    )
}

export default ViewNotesButton