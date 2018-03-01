import React, { Component } from 'react';

class CreateNote extends Component {
    
    state = {
        title:'', 
        text:''
    };
        
render() {
    return (
        <div className="Notes">
            <form id="form" onSubmit={this.CreateNote}>
                <h1>Create New Note:</h1><br/>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Note Title'
                    onChange={this.updateNote}
                    name='title'
                    value={this.state.title}
                />
                <input
                    className='form-control1'
                    type='text'
                    placeholder='Note Content'
                    onChange={this.updateNote}
                    name='text'
                    value={this.state.text}
                />
                <button type='submit'>Save</button>
            </form>
        </div>
          
      
    );
  }

  updateNote = event => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({ [name]: value });
  };

  createNote = event => {
      event.preventDefault();
      const newNote = {
          title: this.state.title,
          text: this.state.text
      };

      const newNotes = [...this.state.notes, newNote];
      this.setState({ notes: newNotes, title: '', text: ''});
  };

}

export default CreateNote;