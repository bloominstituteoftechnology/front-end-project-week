import React, { Component } from 'react';

class EditNote extends Component {
//   noteIndex = notes.findIndex(note => note.id === id);
  noteSubmitHandler = (event) => {
      event.preventDefault();
  }
  noteChangeHandler = (event) => {
      let { name, value } = event.target;
      this.setState({ [name]: value });
  }
  render() {
      // console.log('this is what the id of the last note is: ', this.props.notes.slice(-1)[0].id)
      // console.log('this note id should be: ', this.getNextId())
      // console.log('what is state here: ', this.state)
      // console.log('what is props here: ', this.props)
      console.log(this);
      console.log(this.props);
      // console.log(this.props.notes);
      // console.log(this.props.notes.slice(-1));
      // console.log(this.props.notes.slice(-1)[0]);
      // console.log(this.props.notes.slice(-1)[0].id);
      // console.log(this.props.notes.concat(this.state))
      let id = this.props.match.params.id;
      return (
          <div className="new-note-container">
            <div className="note-list__title">Create New Note:</div>                
            <div className="new-note__title-input" name="id" value="9">
              <textarea 
                className="title-input" 
                placeholder="Note Title" 
                rows="50" cols="1" 
                maxLength="50" 
                name="title" 
                value={this.props.notes[`${id}`].title}
                onChange={this.noteChangeHandler}
              />    
            </div>
            <div className="new-note__content-input">
              <textarea 
                className="content-input" 
                placeholder="Note Content" 
                rows="4" 
                cols="72" 
                name="body"
                value={this.props.notes[`${id}`].body}
                onChange={this.noteChangeHandler}
              />
            </div>
            <div className="save-btn-container">
              <div className="save-btn" onClick={this.noteSubmitHandler}>Save</div>
            </div>
          </div>
      )
  }
}

export default EditNote;