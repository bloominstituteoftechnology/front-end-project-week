import React, { Component } from 'react';

import '../App.css';

class CreateContainer extends Component {
    render() {
        return(

            // input fields for content and title
            // being passed through a save button that starts an onClick event to axios.post.
            
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