import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getNotes } from '../actions/notesActions'
import Note from './Note'

class NotesList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getNotes()
  }

  render(){
    return (
      <div>
        { this.props.loading ? <h1>LOADING</h1> : null }

        { this.props.error !== '' ? <h1>{this.props.error}</h1> : null }

        { this.props.notes.map( note => <Note note={note} key={note.id}/> ) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getNotes })(NotesList)