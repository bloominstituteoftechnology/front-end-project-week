import React, { Component } from 'react';
import axios from 'axios';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            content: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    editNote = event => {
        event.preventDefault();
        axios.put(`http://localhost:9000/api/notes/${this.props.match.params.id}`, {"title": this.state.title, "content": this.state.content})
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error('SERVER ERROR', error)
          });
          this.setState({title: '', content: ''});
    };

    

    render() {
        return (
            <div className='add-note'>
                <h2>Edit Note:</h2>
                <input
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <textarea 
                    type='text'
                    placeholder='Note Content'
                    name='content'
                    value={this.state.content}  
                    onChange={this.handleChange}             
                />
                <button onClick={this.editNote}>Update</button>
            </div>
        )
    }
}


export default EditNote;








































// putRequest = (id, updatedNote) => {
//     axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, updatedNote)
//     .then(response => this.getRequestAll())
//     // Or
//     // .then(response => {
//     //   this.setState({
//     //     ...this.state,
//     //     notes: [...this.state.notes, {...updatedNote}]
//     //     })
//     // })
//     .catch(error => console.log(error))
// } 