import React, { Component } from 'react';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {           
            noteTitle: '',
            noteContent: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    addNote = (e) => {
        const newNote = {
            title: this.state.noteTitle,
            textBody: this.state.noteContent,
        }
        this.props.addNote(newNote)
        this.setState({
            noteTitle: '',
            noteContent: '',
        })
    }

    render() {
        return(
            <form onSubmit={this.addNote}>                
                <textarea 
                    type='text' 
                    name='noteTitle' 
                    value={this.state.noteTitle} 
                    onChange={this.handleChange}
                    placeholder='Note Title' 
                />                
                <textarea 
                    type='text' 
                    name='noteContent' 
                    value={this.state.noteContent} 
                    onChange={this.handleChange}
                    placeholder="Note Content" 
                />            
                <button type='submit' value='Submit' />
            </form>
        )
    }
}



export default CreateNote;