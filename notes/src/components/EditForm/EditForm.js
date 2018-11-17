import React from 'react';

import './editform.css';

class EditForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      id: '',
      title: '',
      text: '',
    }
  }

  componentDidMount() {
    this.props.notes.map(note => {
      if(this.props.match.params.id === `${note._id}`) {
        this.setState({ id: note._id, title: note.title, text: note.textBody })
      }
    })
  }
  
  inputHandler= (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.editNote(this.state.id, this.state.title, this.state.text)
  }

    render() {
      return (
        <div className="editForm">
        <h2 className="editNoteHeader">Create New Note:</h2>
         <form onSubmit={this.submitHandler}>
           <input type="text" placeholder="Note Title" className="titleField" name="title" value={this.state.title} onChange={this.inputHandler}></input>
           <textarea placeholder="Jot down a note" className="textField" name="text" value={this.state.text} onChange={this.inputHandler}></textarea>
           <input type="submit" value="Submit Edit" className="submitEdit"></input>      
         </form>

        </div>
      );
    }
  }
  
  export default EditForm;