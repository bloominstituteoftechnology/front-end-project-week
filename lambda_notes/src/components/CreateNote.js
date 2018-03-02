import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';

class CreateNote extends Component {
    
    state = {
        title:'', 
        text:'',
        redirect: false,
    };
     
    updateNote = (event) => {
      let { name, value } = event.target;
      this.setState({ [name]: value });
  };

  createNote = (event) => {
      event.preventDefault();
      this.props.newNote(this.state);
      this.setState({ redirect: true });
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
                <button id='save' type='submit'><b>Save</b></button>
            </form>
            {this.state.redirect ? <Redirect to='/' /> : null }
        </div>
          
      
    );
  }

  

}

export default CreateNote;