import React, { Component } from 'react'
import NoteCard from './NoteCard'
import { Link } from 'react-router-dom'
import { fetchNotes } from '../actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class NoteList extends Component {
    
    componentDidMount(){console.log('mount')
        this.props.fetchNotes()
    }
    render(){
        return(
            <div className = "note-list-wrap">
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
        )
    }
} 

const mapStatetoProps = (state) => {
    return{        
        notes: state.notes
    }
}

export default withRouter(connect(mapStatetoProps, { fetchNotes })(NoteList))