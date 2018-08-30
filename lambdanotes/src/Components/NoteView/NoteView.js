import React from 'react';


const NoteView = props => {
    return (
        <div className="noteView-container">
            <div>
                <h4>
                    {}
                </h4>
                <div className="noteView-Content">
                    <a href="#" className="edit_link">edit</a>
                    <a href="#" className="edit_link">delete</a>
                </div>
            </div>
        </div>
    );
}

export default NoteView;