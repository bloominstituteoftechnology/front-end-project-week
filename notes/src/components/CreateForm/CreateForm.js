import React from 'react';

import './createform.css';

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    }
  }
  
  inputHandler= (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.createNote(this.state.title, this.state.text);
    this.setState({ title: '', text: '' });
    this.props.history.push('/');
  }
    render() {
      return (
        <div className="createForm">
        <h2 className="createNoteHeader">Create New Note:</h2>
         <form onSubmit={this.submitHandler} >
           <input type="text" placeholder="Note Title" className="titleField" name="title" value={this.state.title} onChange={this.inputHandler}></input>
           <textarea placeholder="Jot down a note" className="textField" name="text" value={this.state.text} onChange={this.inputHandler}></textarea>
           <input type="submit" value="Create Note" className="createSubmit"></input>      
         </form>

        </div>
      );
    }
  }
  
  export default CreateForm;