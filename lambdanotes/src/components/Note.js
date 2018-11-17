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
                <h3>Note Title</h3>
                {this.props.note.textBody}
               </div>
            </NoteStyles>   
            </>
        );
    }
}

export default Note;
