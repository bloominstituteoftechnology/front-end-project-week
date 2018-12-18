import React from "react";
import axios from "axios";

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        };
    }

    createNote = event => {
        event.preventDefault();
        const newNote = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        axios
        .post('https://fe-notes.herokuapp.com/note/create', newNote)
        .then(response => {
            console.log(response.data);
            this.props.updateNote(response.data);
            this.props.history.push('/')
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className='add-note'>
                <form onSubmit={this.createNote}>
                <h2>Create New Note:</h2>
                <input 
                    type='text'
                    name='title'
                    placeholder='Note Title'
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    required
                />
                <textarea 
                    name='textBody'                    
                    placeholder='Note Content'
                    value={this.state.textBody}
                    onChange={this.handleInputChange}
                    required
                />
                <button className='btn' type='submit'>Save</button>
                </form>
            </div>
        );
    }

    
}

export default AddNote;