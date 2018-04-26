import React, { Component } from 'react';
import Note from './Note';
import NoteList from './NotesList';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     notes: []
        //     }
        };
    

    noteHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    
      handleSubmitNote = () => {

        const notes = this.state; // this is undefined
        const myNote = {title: this.state.newNoteTitle, body: this.state.newNoteBody}
        // notes.push(myNote);
         const addToNotesList = this.props.addToNotesList;
         addToNotesList(myNote)
         //this.setState({notes, newNoteTitle: '', newNoteBody: ''});
         this.setState({notes, title: '', body: ''})
      }
    
    render() {
        return (
            
            <div>
                <input className ='notetitle' type= 'text' placeholder='Add Note Title' name='newNoteTitle' value={this.props.newNoteTitle} onChange={this.noteHandler}/>
                <input className ='notebody' type= 'text' placeholder='Add Note Body' name='newNoteBody' value={this.props.newNoteBody} onChange={this.noteHandler}/>
              <button className = 'addnote' onClick={this.handleSubmitNote}>Add Note</button>
            </div>
        );
    }
}

export default CreateNote;