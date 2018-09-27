import React from 'react';


class NoteForm extends React.Component{
    constructor(){
        super()
        this.state = {
            noteTitle: "",
            noteBody: ""
        }
    }

    addNote = event => {
        event.preventDefault();
        const newNote = {
          noteTitle: this.state.noteTitle,
          noteBody: this.state.noteBody,
          id: this.state.id
        }
    
        this.props.postNote(newNote);
        
        this.setState({
          noteTitle: '',
          noteBody: '',
        });
      }
    
      handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render(){
        return(
            <div>
                <h1>My Form</h1>
                <form onSubmit={this.addNote}>
                    <input type="text" onChange={this.handleInputChange} name="noteTitle" value={this.state.noteTitle} placeholder="Title" />
                    <input type="textbox" onChange={this.handleInputChange} name="noteBody" value={this.state.noteBody} placeholder="notes" />
                    <button type="submit">Add Note</button>
                </form>
            </div>
        );
    }
}

export default NoteForm;