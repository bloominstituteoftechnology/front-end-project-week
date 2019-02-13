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
                ...this.state.note,
                [e.target.name]: e.target.value,
                // [e.target.textBody]: e.target.value
            }
                
            // }
        })
    }
    addNoteHandler = e => {
        e.preventDefault();
            this.props.addNote(this.state.note);
            this.setState({
                note: {
                    title: '',
                    textBody: ''
                    // tags: []
                }
            })
    }

    render() {
        return (
            <form onSubmit={this.addNoteHandler}>
                <input
                    value={this.state.title}
                    onChange={this.changeHandler}
                    name="title"
                    placeholder="Title"
                    type="text"
                />

                <textarea
                    value={this.state.textBody}
                    onChange={this.changeHandler}
                    name="textBody"
                    placeholder="Body"
                    type="textarea"
                />
               
                <button type="submit">Add Note</button>
            </form>
        )
    }
}

export default AddNoteForm;