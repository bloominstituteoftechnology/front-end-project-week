import React from 'react';
import axios from 'axios';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            loading: false,
            creating: false,
            title: '',
            textBody: '',
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const note = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        this.setState({...this.state, creating: true});
        axios.post('https://fe-notes.herokuapp.com/note/create', note)
            .then( response => {
                this.props.history.push(`/note/${response.data.success}`);
            })
            .catch( err => {
                this.setState({error: "Unable to create note on server", loading: false});
            })
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <h2>Create New Note:</h2>
                </header>
                <form className="note-form" onSubmit={this.handleSubmit}>
                    { this.state.loading === true ? <h1>Loading...</h1>: null }
                    { this.state.error !== null ? <h1>{this.state.error}</h1> : null }
                    <input
                        name="title"
                        value={this.state.title}
                        onChange={this.inputHandler}
                    />
                    <textarea
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.inputHandler}
                    />
                    <button type="submit">Save</button>
                </form>
                { this.state.creating === true ? <h1>Creating...</h1>: null }
            </React.Fragment>
        )
    }
}

export default NoteForm;