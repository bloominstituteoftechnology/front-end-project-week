import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Notes from './Notes'
import NewNote from './NewNote'
import Note from './Note'
import NoteEdit from './NoteEdit'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/notes' component={Notes} />
            <Route path='/new' component={NewNote} />
            <Route exact path='/notes/:id' component={Note} />
            <Route path='/notes/edit/:id' component={NoteEdit} />
        </Switch>
    </main>
)

export default Main
