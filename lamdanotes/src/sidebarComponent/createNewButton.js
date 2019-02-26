import React from 'react';

import { Link } from 'react-router-dom';

const CreateNewButton = props => {
    return (
        <div>
            <Link to="/addnote">
                <button className="sbButtons">
                    <img src="https://img.icons8.com/material/20/FFFFFF/plus-math.png" alt="new note button"/> 
                    <p>Create New Note</p>
                </button>
            </Link>
        </div>
    )
}

export default CreateNewButton