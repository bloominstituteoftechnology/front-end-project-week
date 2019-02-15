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
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        console.log(this.props);
        let newNote = this.props.notes.find(note => id === note._id);
        console.log(newNote);
        this.setState({
            note: {
                title: newNote.title,
                textBody: newNote.textBody,
            }
        })
    }
    changeHandler = e => {
        this.setState({
            note: {
                ...this.state.note,
                [e.target.name]: e.target.value
            }
        })
    }
    editNoteHandler = e => {
        e.preventDefault();
            this.props.editNote(this.props.match.params.id, this.state.note);
            this.setState({
                note: {
                    title: this.state.note.title,
                    textBody: this.state.note.textBody,
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