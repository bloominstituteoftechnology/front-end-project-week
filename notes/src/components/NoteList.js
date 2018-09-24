import React from 'react';
import Note from './Note';
import NoteDetails from './NoteDetails';
import {withRouter, Route, Link, Switch} from 'react-router-dom';

const NoteList = (props) => {
    return (
        <div className = 'note-list'>

        <Switch>
            <Route path='/notes/:id' render={(props) => <NoteDetails {...props} />} />
        </Switch>
            {props.notes.map(note => {
                return <Link to = {`/notes/${note._id}`}>
                <Note {...note} key = {note._id} />
                </Link>
            })}

        </div>
    )
}

export default withRouter(NoteList);