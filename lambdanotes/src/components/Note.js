import React, { Component } from 'react';
import NoteStyles from './styles/NoteStyle';
import {Link} from 'react-router-dom';

class Note extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const note = this.props.note;
        return (
            <>
            <NoteStyles>
              <div className="note">
                <Link to={`/note/${note._id}`} >
                   <h3>{this.props.note.title}</h3>
                </Link>
                   {this.props.note.textBody}
               </div>
            </NoteStyles>   
            </>
        );
    }
}

export default Note;
