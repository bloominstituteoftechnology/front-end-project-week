import React, { Component } from 'react';

class NewNote extends Component {
    state = {
        id: '',
        title: '',
        body: '',
    }
    // getNextId = (lastId) => {
    //     lastId = this.props.notes.length;
    //     return lastId + 1;
    // }
    noteSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ id: this.props.notes.length, title: this.state.title, body: this.state.body })
        this.props.notes.push(this.state);
        this.props.notes[this.props.notes.length - 1].id = this.props.notes.length -1; // this is crazy and shouldn't work this way but it does
    }
    noteChangeHandler = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        // console.log('this note id should be: ', this.props.notes.length)
        // console.log('what is state here: ', this.state)
        // console.log('what is props here: ', this.props)
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
                  value={this.state.title}
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

export default NewNote;