import React, { Component } from 'react';

class AddNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                title: '',
                textBody: '',
                tags: []
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.addNoteHandler}>
                <input
                    placeholder="Title"
                    type="text"
                />
                <textarea
                    placeholder="Body"
                    type="textarea"
                />
            </form>
        )
    }
}

export default AddNoteForm;