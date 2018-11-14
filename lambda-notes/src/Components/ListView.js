import React, {Component} from 'react'
import NotesNav from './NotesNav'
import NotesList from './NotesList'
class ListView extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
            <NotesNav />
            <NotesList />
            </div>
        ) 
    }

}

export default ListView
