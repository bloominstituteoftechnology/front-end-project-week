import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './ListNotes.css';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/index';

export default class ListNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // componentDidMount() {
    //     this.props.fetchNotes();
    // }

    render() { 
        console.log('PROPS:', this.props)
        return ( 
            <div>
                <Link className="export" to="/export">
                    <button>Download Notes</button>
                </Link>
                <h2 className="main-header">Your Notes:</h2> 
                <div className="note-list">
                    {this.props.notes.map(note => (
                        <NoteDetails key={note.id} note={note} />
                    ))}
                </div>
            </div>
         )
    }
}
 

function NoteDetails({ note }) {
    const { title, body } = note;
    return (
        <div>
            <div className="note-card">
                <Link to={`/note/${note.id}`} >
                    <h2>{title}</h2>
                    <p>{body}</p>
                </Link>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     console.log('State:', state)
//     return {
//         notes: state.noteReducer.notes
//     }
//   }
  
//   export default connect(mapStateToProps, { fetchNotes } )(ListNotes);
