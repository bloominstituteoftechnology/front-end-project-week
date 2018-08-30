import React from 'react';
import { Link } from 'react-router-dom';

export const EditNote = props => {
    return (
        <div>
            <h2>Edit Note:</h2>
            <div>
                <input
                    handleInputChange={props.handleInputChange}
                    name="edittitle"
                    defaultValue={props.edittitle}
                    />
                <textarea
                    handleInputChange={props.handleInputChange}
                    name="edittext"
                    defaultValue={props.edittext}
                    />
            <Link to="/">
                <button onSubmit={() => props.submitEdit(props.match.params.id)}>
                    Save
                </button>
            </Link>
            </div>
        </div>

    )
}

