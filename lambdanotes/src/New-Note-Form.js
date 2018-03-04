import React from 'react';

const NewNoteForm = (props) => {
        return (
        <div>
            <h5>Create New Note+</h5>
            <form onSubmit={this.addNote}>
              <input onChange={props.handleNewNoteInput} name='title' type='text' placeholder='Title' value={props.state.title}></input>
              <input onChange={props.handleNewNoteInput} name='content' type='text' placeholder='Content' value={props.state.content}></input>
              <button type='submit'>Save</button> 
            </form>  
        </div>
        );
}


export default NewNoteForm;