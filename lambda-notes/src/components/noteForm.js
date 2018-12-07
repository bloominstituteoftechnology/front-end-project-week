import React from 'react';
import axios from 'axios';

class NoteForm extends React.Component {
    state = {
        title: '',
        textBody: ''
    }

    handleChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    addNote = (ev) => {
        ev.preventDefault();
        axios
            .post('https://fe-notes.herokuapp.com/note/create',this.state)
            .then(res=>{
                console.log(res);
                this.props.history.push('/myNotes')
            })
            .catch(err=>console.log(err));
        
    }

    render() {
        return(
            <form onSubmit={this.addNote}>
            <h1>Note Form</h1>
            <input name='title' value={this.state.title}
                placeholder='note title' 
                onChange={this.handleChange} />
            <textarea name='textBody' value={this.state.textBody}
                placeholder='note to add...'
                onChange={this.handleChange} />
            <button type='submit'>Add Note</button>
            </form>
        )
    }
}

export default NoteForm;