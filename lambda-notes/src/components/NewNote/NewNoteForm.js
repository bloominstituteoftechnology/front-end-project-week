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
            console.log(newNote);
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
                <div className="new-note-wrapper">
                    <h2>Create New Note:</h2>
                    <form className="new-note-form" onSubmit={this.submitHandler}>
                        <input
                            type="text"
                            name="title"
                            onChange={this.changeHandler}
                            placeholder="Note Title"
                            value={this.state.title}
                        />
                        <input
                            type="text"
                            name="textBody"
                            onChange={this.changeHandler}
                            placeholder="Note Content"
                            value={this.state.textBody}
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            )
        }
    }
}

export default NewNoteForm;