import React from "react";

import Note from './Note';


export default class Notes extends React.Component {


    render() {
        return (
            <div>
                {this.props.notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        )
    }
}