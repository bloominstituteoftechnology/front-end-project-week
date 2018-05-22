import React, { Component } from 'react';

class CreateNoteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
    }

    render() {
        return (
            <div className="note-creator">
                <h1 className="create-note-text">Create New Note:</h1>
                <div className="create-note-container">
                    <div className="create-input-title">
                        <input
                            className="form-control"
                            type="text"
                            placeHolder="Write title here"
                            name="title"
                            value={this.state.title}
                            onChange={e => this.setState({ [e.target.name]: e.target.value })} 
                        />
                    </div>
                    <div className="create-input-content">
                        <textarea
                            className="form-control"
                            type="text"
                            placeHolder="Write content here"
                            name="content"
                            rows="10"
                            value={this.state.content}
                            onChange={e => this.setState({ [e.target.name]: e.target.value })}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateNoteItem;