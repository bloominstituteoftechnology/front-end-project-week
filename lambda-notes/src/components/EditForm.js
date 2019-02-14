import React, { Component } from 'react';

class EditForm extends Component {
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
                [e.target.name]: e.target.value
            }
        })
    }
    editNoteHandler = e => {
        e.preventDefault();
            this.props.editNote(this.props.note._id, this.state.note);
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
            <form onSubmit={this.editNoteHandler}>
                <input
                    value={this.state.note.title}
                    onChange={this.changeHandler}
                    name="title"
                    placeholder="Title"
                    type="text"
                />

                <textarea
                    value={this.state.note.textBody}
                    onChange={this.changeHandler}
                    name="textBody"
                    placeholder="Body"
                    type="textarea"
                />
               
                <button type="submit">Edit Note</button>
            </form>
        )
    }
}

export default EditForm;