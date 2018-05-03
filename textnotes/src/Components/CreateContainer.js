import React, { Component } from 'react';

import '../App.css';

class CreateContainer extends Component {
    render() {
        return(
            <div className="createPage">
                <h3 className="create-logo"> Create New Note: </h3>
                <input className="title-text-box"
                    type="text"
                    name="name"
                    placeholder="Note Title"
                    />
                    
                <textarea className="content-box"
                    type="text"
                    name="name"
                    placeholder="Note Content"
                    />

                <button className="save-button">Save</button>
            </div>
        );
    }
}

export default CreateContainer;