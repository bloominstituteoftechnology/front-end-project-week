import React from 'react';

import { Link } from 'react-router-dom';

const CreateNewButton = props => {
    return (
        <div>
            <Link to="/addnote">
                <button className="sbButtons">+ Create New Note</button>
            </Link>
        </div>
    )
}

export default CreateNewButton