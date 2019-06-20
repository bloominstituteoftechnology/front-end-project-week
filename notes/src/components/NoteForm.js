import React, { Component } from 'react';


class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.state= {
            title: "",
            textBody: ""
        }
    }
    
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    submitNote = event => {
        this.props.addNote(event, this.state);
        this.setState({ title: "", textBody: "" })
        this.props.history.push("/")
    }
    
    render() {
      
        return (
            <div className="new-note-container">
        <div className="notes-header">
          <h3>Create New Note:</h3>
        </div>
        <form onSubmit={this.submitNote}>
          <input
            className="form-note-title"
            name="title"
            value={this.state.title}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Title"
            />
          <textarea
            className="form-note-content"
            name="textBody"
            value={this.state.textBody}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Content"
            />

          <button className="form-button">Save</button>
        </form>
      </div>
    );
}
}



  export default NoteForm;


