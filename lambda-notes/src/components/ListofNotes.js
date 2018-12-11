import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';
import Note from './Note';


export default class ListOfNotes extends React.Component {

    // singleNote = id => {
    //     console.log('hi')
    //     id = this.state.match.params.id;
    //     console.log(id)
    //     this.props.fetchNote(id);
    //   }



    render() {
        return (
            <div className="notes-container">
            {this.props.state.notes.map(note => (
                <Note 
                    note={note}
                    key={note._id}
                    fetchNote={this.props.fetchNote}
                    title={note.title}
                    text={note.textBody}
                    id={note._id} />
            ))}
            </div>
        )
    }
}

// function NoteDetails({ note }) {
//     const { title, _id, textBody, tags } = note;
//     return (
//         <Link to={`/note/${_id}`} className="note-card">
//             <NoteCard
//                 title={title}
//                 textBody={textBody}
//                 tags={tags} 
//                 onClick={() => this.props.singleNote}
//                 />
//         </Link>
//     )
// }