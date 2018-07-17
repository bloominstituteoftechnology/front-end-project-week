import React from 'react';

const CreateView = props => {
    return (
        <div className="CreateView-container">
            <div className="CreateView-header">
                <h2>Create New Note:</h2>
            </div>
            <form className="CreateView-content" onSubmit={props.handleSubmit}>
                <input
                    name="title"
                    placeholder="Note Title"
                    value={props.title}
                    onChange={props.handleChange}
                    />
                <textarea
                    name="textBody"
                    placeholder="Note Content"
                    value={props.textBody}
                    onChange={props.handleChange}
                    />
            </form>
            <div className="CreateView-buttons">
                <button onClick={props.handleSubmit}>Save</button>
            </div>
        </div>
    );
};

export default CreateView;