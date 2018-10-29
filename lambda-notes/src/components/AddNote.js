import React from 'react';
import Axios from 'axios';

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
        }
    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const newNote = {
            tags: [],
            title: this.state.title,
            textBody: this.state.text,
        }
        Axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
         .then(response => {
             console.log(response);
         })
         .catch(error => {
             console.error(error);
         })
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>New Note</h1>
                    <input 
                        type="text"
                        name="title"
                        placeholder="title"
                        value={this.props.value}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        type="text"
                        name="text"
                        placeholder="text body"
                        value={this.props.value}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Add Note</button>
                </form>
            </div>
        );
    }
}

export default AddNote;