import React, { Component } from 'react'
import NoteCard from './NoteCard'
import { Link } from 'react-router-dom'
import { fetchNotes, selectId } from '../actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class NoteList extends Component {
    
    componentDidMount(){
        this.props.fetchNotes()
    }

    // componentDidUpdate(){
    //     this.props.fetchNotes()
    // }

    render(){
        return(
            (this.props.fetched)
            ?<div className = "note-list-wrap">
                <h2 className = "note-title">Your Notes:</h2>
                <div className = "note-list">
                    {this.props.notes.map(note =>
                        <Link to = {`/${note.id}`} onClick = {()=>this.props.selectId(note.id)}><NoteCard
                            key = {note.id}
                            title = {note.title}
                            note = {note.note}                                                        
                        />
                        </Link>
                    )}
                </div>
            </div>
            :<div className = "loading">
                Loading...
            </div>
        )
    }
} 

const mapStatetoProps = (state) => {
    return{        
        notes: state.notes,
        fetched: state.fetchedNotes,
        deleted: state.deletingNote
    }
}

export default withRouter(connect(mapStatetoProps, { fetchNotes, selectId })(NoteList))