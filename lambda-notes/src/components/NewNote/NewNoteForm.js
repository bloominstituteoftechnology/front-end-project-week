import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class NewNoteForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            textBody: '',
            redirectId: '',
            shouldRedirect: false
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (this.state.title && this.state.textBody) {
            const newNote = Object.assign({}, { title: this.state.title, textBody: this.state.textBody });
            axios
                .post('https://fe-notes.herokuapp.com/note/create', newNote)
                .then(response => {
                    this.setState({
                        redirectId: response.data.success,
                        shouldRedirect: true
                    })
                })
                .catch(err => console.log(err));
        }
    }

    render() {
        if (this.state.shouldRedirect) {
            return <Redirect to={`/notes/${this.state.redirectId}`} />
        } else {
            return (
                <div className="view-wrapper">
                    <h2 className="view-header">Create New Note:</h2>
                    <form className="note-form" onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            name="title"
                            className="note-title"
                            onChange={this.changeHandler}
                            placeholder="Note Title"
                            value={this.state.title}
                        />
                        <textarea
                            type="text"
                            name="textBody"
                            className="note-content"
                            onChange={this.changeHandler}
                            placeholder="Note Content"
                            value={this.state.textBody}
                        />
                        <button type="submit" className="note-button">Save</button>
                    </form>
                </div>
            )
        }
    }
}

export default NewNoteForm;