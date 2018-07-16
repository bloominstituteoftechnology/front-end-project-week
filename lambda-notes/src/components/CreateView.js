import React from 'react';

const CreateView = props => {
    return (
        <div className="CreateView-container">
            <div className="CreateView-header">
                <h2>Create New Note:</h2>
            </div>
            <div className="CreateView-content">
                <input placeholder="Note Title"/>
                <textarea placeholder="Note Content"/>
            </div>
            <div className="CreateView-buttons">
                <button>Save</button>
            </div>
        </div>
    );
};

export default CreateView;