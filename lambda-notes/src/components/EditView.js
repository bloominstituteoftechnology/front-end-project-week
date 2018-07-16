import React from 'react';

const EditView = props => {
    return (
        <div className="EditView-container">
            <div className="EditView-header">
                <h2>Edit Note:</h2>
            </div>
            <div className="EditView-content">
                <input placeholder="Note Title"/>
                <textarea placeholder="Note Content"/>
            </div>
            <div className="EditView-buttons">
                <button>Update</button>
            </div>
        </div>
    );

};

export default EditView;