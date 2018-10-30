import React from 'react';
import axios from 'axios';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.note.title,
            text: this.props.note.textBody,
        }
    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    
    editNote = event => {
        console.log(this.state.editTitle, this.state.editBody)
        event.preventDefault()
        const url = `https://fe-notes.herokuapp.com/note/edit/${this.props.note._id}`;
        axios.put(url, {
            title: this.state.title,
            textBody: this.state.text,
        })
         .then(response => {
             console.log(response);
             this.props.updateNotes(response.data);
         })
         .catch(error => {
             console.error(error);
         })
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <form onSubmit={this.editNote}>
                    <h1>Edit Note</h1>
                    <input 
                        type="text"
                        name="title"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        type="text"
                        name="text"
                        placeholder="text body"
                        value={this.state.text}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Update</button>
                </form>
            </div>
        );
    }
}

export default EditNote;