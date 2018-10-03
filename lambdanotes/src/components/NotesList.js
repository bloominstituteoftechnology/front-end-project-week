import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import Notes from './Notes';

class NotesList extends Component {
    render() {
        return (
            <div className="noteWrap">
                <ul>
                    {this.props.notesList.map(note => {
                        return (
                            <Notes
                                key={note.id}
                                tag={note.tag}
                                title={note.title}
                                textBody={note.textBody}
                            />
                        );
                    })}
                </ul> 
                {/* <Link to={`/notes/${note.id}`}>{this.propsnote.title}</Link> */}
            </div>
        );
    }
}
export default NotesList;
//bring back notes