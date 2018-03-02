import React, { Component } from 'react';


class EditNote extends Component {
    state ={
        id: +this.props.match.params.id,
        title: this.props.notes.title,
        body: this.props.notes.body,
        
    }
  getNoteIndex = () => {
    for (let i = 0; i < this.props.notes.length; i++) {
        if (+this.props.match.params.id === this.props.notes[i].id) {
            // console.log('index in if statement: ', i)
            return i;
        }
    
    }
    // console.log('How is i defined here? ')
  }
  noteSubmitHandler = (event) => {
      event.preventDefault();
      this.setState({title: this.state.title, body: this.state.body});
      this.props.notes.splice(this.getNoteIndex(), 1, this.state);
      this.props.history.push("/")
  }
  noteChangeHandler = (event) => {
      let { name, value } = event.target;
      this.setState({ [name]: value });
      
  }
  render() {
    //   console.log('what is state here: ', this.state)
    //   console.log('what is props here: ', this.props)
    //   console.log('Does my function give me the right index?', this.getNoteIndex());
    //   console.log(this);
    //   console.log(this.props);
    //   console.log(this.props.notes);
    //   console.log('The id of the index 2 note object', this.props.notes[2].id)
    //   console.log(this.props.notes.slice(-1));
    //   console.log(this.props.notes.slice(-1)[0]);
    //   console.log(this.props.notes.slice(-1)[0].id);
    //   console.log(this.props.notes.concat(this.state))
      return (
          <div className="new-note-container">
            <div className="note-list__title">Edit Note:</div>                
            <div className="new-note__title-input" name="id" value="9">
              <textarea 
                className="title-input" 
                placeholder={this.props.notes[this.getNoteIndex()].title}
                rows="50" cols="1" 
                maxLength="50" 
                name="title" 
                value={this.state.title}
                onChange={this.noteChangeHandler}
              />    
            </div>
            <div className="new-note__content-input">
              <textarea 
                className="content-input" 
                placeholder={this.props.notes[this.getNoteIndex()].body}
                rows="4" 
                cols="72" 
                name="body"
                value={this.state.body}
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