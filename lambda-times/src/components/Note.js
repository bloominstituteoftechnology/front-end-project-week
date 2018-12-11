import React from 'react';
import NoteCard from './NoteCard';
import axios from 'axios';

class Note extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         note: null
    //     }
    // }

    // componentDidMount() {
    //     const id = this.state.match.params.id;
    //     this.fetchNote(id);
    // }

    render() {

        const { title, textBody } = this.state.note;
        return(
        <div className="note-card">
        <NoteCard
            title={title}
            textBody={textBody} />
        </div> )
    }
}

export default Note;