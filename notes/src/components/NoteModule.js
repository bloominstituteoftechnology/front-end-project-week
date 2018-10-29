import React, {useEffect, useState} from 'react';

const NoteModule = ({
    note = false, 
    getNote,
    deleteNote,
    history, 
    match
}) => {

    const [gotNote, setGotNote] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    useEffect(() => {
        if(gotNote) return;

        const { id } = match.params;
        getNote(id);
        setGotNote(true);
    });

    if(note.title === undefined) return (<h2>Loading Note</h2>)
    return (
        <div className="note note-module">
            <div className="title">{note.title}</div>
            <div className="body">{note.textBody}</div>

            <div className="action-bar">
                <i className="far fa-edit"></i>
                <i 
                    className="far fa-trash-alt" 
                    onClick={e => {
                        e.preventDefault();
                        setShowDelete(true);
                    }}
                ></i>
            </div>

            {!showDelete ? null
                : (
                    <div className="module-container">
                        <div className="module">
                            <h3>Are you sure you want to delete?</h3>
                            <div>
                                <button 
                                    className='close' 
                                    onClick={e => {
                                        e.preventDefault();
                                        setShowDelete(false);
                                    }}
                                >Close</button>
                                <button 
                                    className='delete'
                                    onClick={e => {
                                        e.preventDefault();
                                        deleteNote(note._id)
                                        setShowDelete(false);
                                        history.push('/');
                                    }}
                                >DELETE</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default NoteModule;
