import React, { Component } from 'react';
import axios from 'axios';





class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        };
    }

   
    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    addNote = event => {
        event.preventDefault();
        const newNote = { title: this.state.title, textBody: this.state.textBody}
        axios
          .post('https://fe-notes.herokuapp.com/note/create', newNote)
          .then(response => {
            console.log('ADDING', response);
            this.props.changeState(response.data)
          })
          .catch(err =>
            console.log(err));
    
        this.setState({
          title: '',
         textBody: '',
        });

        this.props.history.push('/');
      }

    render() {
        return (
            <div>
                <h2>Create New Note:</h2>
                <form onSubmit={this.addNote} className='new-note-form'>
                    <input
                        className='title-input'
                        placeholder='Note Title'
                        value={this.state.title}
                        name='title'
                        onChange={this.handleInput}
                    />
                    <input
                        className='textbody-input'
                        placeholder='Note Content'
                        value={this.state.textBody}
                        name='textBody'
                        onChange={this.handleInput}
                    />
                    <button type='submit' onClick={this.handleInput} className='save-note'>Save</button>
                </form>

            </div>
        )
    }


}



export default AddNote;