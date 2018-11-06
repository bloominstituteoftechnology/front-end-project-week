import React from 'react';
import { Route } from 'react-router-dom';
import Note from './Note';
import NoteSelect from './NoteSelect'
import Loading from './Loading';
import { NoteListContainer, NoteListTitle} from '../styles';

const NoteList = ({ 
    notes, 
    noteClicked, 
    noteChecked, 
    noteUnChecked, 
    history,
    fetchingNote,
    fetchingNotes,
    addingNote,
    updatingNote,
    deletingNote,
}) => {
    if(
        fetchingNotes
        || addingNote
        || updatingNote
        || deletingNote
    ) return <Loading />
    return (
        <NoteListContainer>
            <NoteListTitle>NOTES</NoteListTitle>
            <Route
                path="/"
                exact
                render={props => 
                    notes.map(note => 
                        <Note 
                            note={note} 
                            key={note._id} 
                            noteClicked={e => noteClicked(e, note._id, history)}
                        />)
                }
            />
            <Route
                path="/select"
                exact
                render={props => 
                    notes.map(note => 
                        <NoteSelect
                            note={note} 
                            key={note._id} 
                            noteChecked={noteChecked}
                            noteUnChecked={noteUnChecked}
                    />)
                }
            />
        </NoteListContainer>
    );
}

export default NoteList;

