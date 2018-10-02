import React, { Component } from 'react';
import { Fragment } from 'react';
import axios from 'axios';

class NotesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            textBody: "",
        };
    }
    handleChange = event => {
          this.setState({...this.state, [event.target.name]: event.target.value} );
          };
      
    handleAddNewNote = event => {
        event.preventDefault();
        console.log("We've got a new note here!");
        axios.post('https://killer-notes.herokuapp.com/note/create', this.state)
        .then(response => this.setState({ notes: response.data }))
        }
   
    render() {
        return (
            <Fragment>
                {/* <h3>{props.updatingNote ? "Updating Notes?" : "Making A New Note?"}</h3> */}
                <form>
                    <div className="noteTitleInputBox">
                        <input
                            type="text"
                            value={this.state.title}
                            placeholder="enter title here..."
                            name="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="noteTextInputBox">
                        <input
                            type="text"
                            value={this.state.textBody}
                            placeholder="enter note here..."
                            name="textBody"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="sumbitNoteButt" onClick={this.handleAddNewNote}>Make Entry</button>
                </form>
            </Fragment>
        );
    }
}
export default NotesForm;

// function handleSubmit(event) {
//     event.preventDefault();
//     if(props.updatingNote) {
//         props.handleUpdateNotes(props.note.id);
//     } else {
//         props.handleAddNewNote();
//     }
// }