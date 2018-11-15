import React, {Component} from 'react'
import NotesNav from './NotesNav'
import NotesList from './NotesList'
class ListView extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className='Main'>
            <NotesNav />
            <NotesList />
            </div>
        ) 
    }

}

export default ListView
