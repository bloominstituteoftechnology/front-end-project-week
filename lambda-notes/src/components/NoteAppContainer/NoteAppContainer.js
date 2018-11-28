import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchNotes }from '../../actions/actions'
import './NoteAppContainer.css'
import NoteListContainer from '../NoteListContainer/NoteListContainer'
import NoteContainer from '../NoteContainer/NoteContainer'

class NoteAppContainer extends React.Component {

 componentDidMount(){
  this.props.fetchNotes()
 }
 render() {
  return (
   <div className="note_app_container">
    <NoteListContainer />
    <NoteContainer notes={this.props.notes} />
   </div>
  );
 }
}

const mapStateToProps = state => {
 const { notes } = state
 return {
  notes: notes
 }
}

export default connect(mapStateToProps, { fetchNotes })(NoteAppContainer);
