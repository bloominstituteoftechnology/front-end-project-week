import React, { Component } from 'react';

class AddNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                title: '',
                textBody: ''
                // tags: []
            }
        }
    }
    changeHandler = e => {
        this.setState({
            note: {
                // ...this.state.note,
                [e.target.title]: e.target.value,
                [e.target.textBody]: e.target.value
                // [e.target.tags]: e.target.value,
            }
        })
    }
    addNoteHandler = e => {
        e.preventDefault();
        // if (([e.target.title] && [e.target.textBody]) === '') {
        //     return false;
        // }
        // else {
            this.props.addNote(this.state.note);
            this.setState({
                note: {
                    title: '',
                    textBody: ''
                    // tags: []
                }
            })
        // }
    }

    render() {
        return (
            <form onSubmit={this.addNoteHandler}>
                <input
                    onChange={this.changeHandler}
                    name="title"
                    placeholder="Title"
                    type="text"
                    value={this.state.note.title}
                />
                <textarea
                    onChange={this.changeHandler}
                    name="textBody"
                    placeholder="Body"
                    type="textarea"
                    value={this.state.note.textBody}
                />
               
                <button type="submit">Add Note</button>
            </form>
        )
    }
}

export default AddNoteForm;