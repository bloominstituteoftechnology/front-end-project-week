import React, {Component} from 'react';
import axios from 'axios';

import Note from './Note';

class Notes extends Component { 

    render() {
        return (
            <div className="notes">
                <h3>Your Notes</h3>
                <p>
                    {this.props.notes.map(note => {
                        return (
                            <div className="notes-div">
                                <Note 
                                tags={note.tag}
                                title={note.title}
                                textBody={note.textBody}
                                id={note._id}
                                />
                            </div>
                        )
                    })}
                </p>
            </div>
        )
    }
}

export default Notes