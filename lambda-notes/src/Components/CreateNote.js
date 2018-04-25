import React from 'react';

const CreateNote = props => {




    noteHandler = (e) => {
        console.log('this is a test');
        this.setState({[e.target.name]: e.target.value})
      }
    
      handleSubmitNote = () => {
        const {notes} = this.state;
        const myNote = {title: this.state.newNoteTitle, body: this.state.newNoteBody}
        notes.push(myNote);
        this.setState({notes, newNoteTitle: '', newNoteBody: ''});
      }
    
        return (
            
            <div>
                <input className ='notetitle' type= 'text' placeholder='Add Note Title' name='newNoteTitle' value={this.state.newNoteTitle} onChange={this.noteHandler}/>
                <input className ='notebody' type= 'text' placeholder='Add Note Body' name='newNoteBody' value={this.state.newNoteBody} onChange={this.noteHandler}/>
              <button className = 'addnote' onClick={this.handleSubmitNote}>Add Note</button>
            </div>
        );
}

export default CreateNote;