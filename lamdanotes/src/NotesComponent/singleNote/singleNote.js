import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import DeleteModal from './deleteModal';



//props from app note={this.state.notes} deleteNote={this.deleteNote}

class SingleNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: {},
            modalDisplay: true
        }
    }

    componentDidMount() {
        // fill this in
        let noteId;
        if (this.props.note._id) {
            noteId = this.props.note._id;
        } else {
            noteId = this.props.match.params.id;
        }
        const foundNote = this.props.note.find(n => n._id === noteId);
        if (!foundNote) return;
        this.setState({ notes: foundNote });
      }
    
    
    render() {
        console.log(this.state.notes)
        return(
            <div className='viewNoteContainer'>
                {/* link to edit note and send the id for this note. onClick will send the id of this note to app.js */}
                <Link 
                    to={`/editnote/${this.state.notes._id}`} 
                    className="viewNoteLinks"
                    onClick={() => {this.props.setCNote(this.state.notes._id)}}
                >
                    edit
                </Link>
                
                <Link 
                    to={`/note/${this.state.notes._id}/delete`} 
                    className="viewNoteLinks"
                >
                    delete
                </Link> 

                <Route
                    path="/note/:id/delete" 
                    render={props => ( <DeleteModal {...props} id={this.state.notes._id} deleteNote={this.props.deleteNote} /> )}  
                />
                


                <h3 className="viewNoteTitle">{this.state.notes.title}</h3>
                <p>{this.state.notes.textBody}</p>

            </div>
        )
    }
}

export default SingleNote