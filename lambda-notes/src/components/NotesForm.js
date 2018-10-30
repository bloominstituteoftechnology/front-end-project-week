import React from 'react';
import axios from 'axios'

class NotesForm extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            textBody: ''
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    addNote = event => {
        event.preventDefault();
        axios
            .post('https://fe-notes.herokuapp.com/note/create', { title: this.state.title, textBody: this.state.textBody })
            .then(response => {
                this.setState({
                    notes:response.data,
                    title: '',
                    textBody: ''
                });
            })
    }
    render() {
        return(
            <div>
                <h1>Create New Note:</h1>
                <form onSubmit={this.addNote}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                        placeholder="title"
                    />
                    <input
                        type="text"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.changeHandler}
                        placeholder="content
                        "
                    />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default NotesForm;