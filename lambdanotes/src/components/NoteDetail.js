import React from 'react';
import '../styles/App.css';

function NoteDetail(props) {
    return (
    <div>
        <div>{props.note.title}</div>
        <div>{props.note.paragraph}</div>
    </div>
    );

}
export default NoteDetail;