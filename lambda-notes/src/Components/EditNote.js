import React, { Component } from 'react';
import Note from './Note';
import NoteList from './NotesList';

class EditNote extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     notes: []
        //     }
        };
    

    

    // noteHandler = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    //   }
    
    //   handleSubmitNote = () => {

    //     const notes = this.state; // this is undefined
    //     const myNote = {title: this.state.editNoteTitle, body: this.state.editNoteBody}
    //     // notes.push(myNote);
    //      const editNote = this.props.editNote;
    //      editNote(myNote)
    //      //this.setState({notes, newNoteTitle: '', newNoteBody: ''});
    //      this.setState({notes, title: '', body: ''})
    //   }
    
    render() {
        return (
            
            <div>
                this is a test
                {/* <input className ='editnotetitle' type= 'text' placeholder='edit Note Title' name='newNoteTitle' value={this.props.editNoteTitle} onChange={this.noteHandler}/>
                <input className ='editnotebody' type= 'text' placeholder='edit Note Body' name='newNoteBody' value={this.props.editNoteBody} onChange={this.noteHandler}/>
              <button className = 'editnote' onClick={this.handleSubmitNote}>Add Note</button> */}
            </div>
        );
    }
}

export default EditNote;