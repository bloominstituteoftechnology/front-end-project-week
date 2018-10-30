import React, { Component} from 'react';
import axios from 'axios';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            textBody: ''
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    updateNote = note => {
        const id = this.props.match.params.id;
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
            .then(response => {
                this.setState({notes: response.data})
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className='edit-Container'>
                <h2>Edit Note:</h2>
                <input 
                    name='title'
                    placeholder='Note Title'
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />
                <input 
                    name='textBody'
                    placeholder='Note Content'
                    value={this.state.title}
                    onChange={this.handleInputChange}
                />

                <button>Update</button>
            </div>
        )
    }
}

export default EditForm;