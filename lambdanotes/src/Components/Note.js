import React from 'react';



function Note(props) {
    return (
        <div className="note-container">
            <div className="link-container">
                <div className="edit">
                    edit
                </div>
                <div className="delete">
                    {/* {deletion = axios 
                        .delete(deletion) => (`https://fe-notes.herokuapp.com/note/delete/${id}`, {note})
                    } */}
                </div>
            </div>
            <div className="body-container">
                <h3>{props.note.title}</h3>
                <p>{props.note.textBody}</p>
            </div>
        </div> 
    )
};
export default Note;


