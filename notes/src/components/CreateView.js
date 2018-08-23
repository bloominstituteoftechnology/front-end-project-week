import React, { Component } from 'react';

import './CreateView.css';

class CreateView extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
        }
    }


    render() {
        return (
            <div>
                <input 
                name="title" 
                value="title"
                type="text"
                placeholder="Note Title"
                className="title-input" />
                <input 
                name="content" 
                value="content"
                type="text"
                placeholder="Note Content"
                className="content-input" />
                <button>Save</button>
            </div>
        )
    }
}

export default CreateView;