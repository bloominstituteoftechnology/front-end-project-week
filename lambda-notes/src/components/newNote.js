import React, { Component } from 'react';

class NewNote extends Component {
    state = {
        id: '',
        title: '',
        body: '',
    }
    getNewId = () => {
        let nextId = this.props.notes.length;
        return nextId++;
    }
    noteSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ id: this.getNewId(), title: this.state.title, body: this.state.body })
        this.props.notes.push(this.state);
    }
    noteChangeHandler = (event) => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        // console.log('what is props here: ', this.props)
        // console.log('what is state here: ', this.state)
        return (
            <div className="new-note-container">
              <div className="note-list__title">Create New Note:</div>                
              <div className="new-note__title-input">
                <textarea 
                  className="title-input" 
                  placeholder="Note Title" 
                  rows="13" cols="1" 
                  maxLength="13" 
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