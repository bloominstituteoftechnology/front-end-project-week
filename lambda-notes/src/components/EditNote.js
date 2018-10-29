import React from 'react';
import Axios from 'axios';

class EditNote extends React.Component {
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
        Axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.props.id}`, newNote)
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
                    <h1>Edit Note</h1>
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
                    <button type="submit">Update</button>
                </form>
            </div>
        );
    }
}

export default EditNote;