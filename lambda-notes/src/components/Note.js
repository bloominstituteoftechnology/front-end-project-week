import React from 'react';

const Note = props => {
    return (
        <div className="Note-container">
            <div className="Note-header">
                <div className="Note-links">
                    <p>edit</p>
                    <p>delete</p>
                </div>
                <h2>Note Name</h2>
            </div>
            <div className="Note-content">
                <p></p>
            </div>
        </div>
    );
};

export default Note;