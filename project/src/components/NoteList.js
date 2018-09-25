import React, {Component} from 'react'
import NoteCard from './NoteCard'
import {Link} from 'react-router-dom'

class NoteList extends Component {
    constructor(props){
        super(props)        
    }
    render(){
        return(
            <div className = "note-list-wrap">
                <h2 className = "note-title">Your Notes:</h2>
                <div className = "note-list">
                    {this.props.notes.map(note =>
                        <Link to = {`/${note.id}`} onClick = {()=>this.props.handleId(note.id)}><NoteCard
                            key = {note.id}
                            title = {note.title}
                            note = {note.note}
                            id ={note.id}
                        />
                        </Link>
                    )}
                </div>
            </div>
        )
    }
} 

export default NoteList