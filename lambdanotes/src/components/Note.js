import React, { Component } from 'react';
import NoteStyles from './styles/NoteStyle';

class Note extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
            <NoteStyles>
              
               <div className="note">
                <h3>{this.props.note.title}</h3>
                {this.props.note.textBody}
               </div>
            </NoteStyles>   
            </>
        );
    }
}

export default Note;
