import React from 'react';
import '../App.css';

function NotePage(props) {
    console.log(props)
    const note = props.notes.find(note => note._id === props.match.params.id);
    console.log(note._id)
    // deleteHandler = id => {

    // }
    // function deleteHandler() {
    //     props.deleteNote(note._id)
    //     props.history.push('/notes')
    // }
    return (
        <div className="notepage-div">
            <div className="edit-delete">
                <div onClick={() => 
                    props.updateNoteForm(note._id)}> edit</div> 
                &nbsp;&nbsp;
                <div onClick={() => {
                    props.deleteNote(note._id)}}> delete</div>
            </div>
            <h1 className="notepage-header">{note.title}</h1>
            <p className="notepage-paragraph">{note.textBody}</p>
        </div>
    )
}

export default NotePage;