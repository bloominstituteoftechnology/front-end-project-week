import React, { Component } from 'react';
import Notes from './Notes';
import axios from 'axios';
// import { Link } from 'react-router-dom';

 class NotesList extends Component {
    state= {
        notes: [
            {id: 1,
            title: "Cats",
            textBody: "meow meow meow ow"},
        ]
    }

    handleChange = event => {
        this.setState({...this.state, id: event.target.value} );
        };

    handleDeleteSubmit = event => {
        event.preventDefault();
        axios.delete(`https://killer-notes.herokuapp.com/note/delete/id/${this.state.id}`)
        .then(response => {
            console.log("Deleting NotesWorking", response);
            console.log(response.data);
        })
    }

    render() {
        return (
            <div className="noteWrap">
                    {this.props.notesList.map((note) => {
                        return (
                            <div>
                            <form onSubmit={this.handleDeleteSubmit}>
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
                                <button className="sumbitNoteButt" type="submit">Delete</button>
                            </form>
                           
                            <Notes
                                key={note.id}
                                tag={note.tag}
                                title={note.title}
                                textBody={note.textBody}
                                // deleteEvent={this.deleteNote.bind(this, index)}
                            />
                             </div>
                        ); 
                    })}
            </div>
         );
     }
 }
 export default NotesList;

//  <Link to={`/notes/${note.id}`}>{note.title}</Link>