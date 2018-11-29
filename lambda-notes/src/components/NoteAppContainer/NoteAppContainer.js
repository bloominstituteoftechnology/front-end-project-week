import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import { fetchNotes }from '../../actions/actions'
import EditView from '../NoteAppViews/EditView'
import CreateView from '../NoteAppViews/CreateView'
import NoteView from '../NoteAppViews/NoteView'
import './NoteAppContainer.css'
import DefaultView from '../NoteAppViews/DefaultView'
import NoteApp from './NoteApp'

class NoteAppContainer extends React.Component {
 state = {
  adding: false,
  editing: false,
  creating: false,
 }

 componentDidMount(){
  this.props.fetchNotes()
 }
 render() {
 
  return (
   <div className="note_app_container">
   <Route exact path="/" render={(props) => <NoteApp {...props} />} />
     <Route exact path="/edit/:noteId" component={EditView}/>
     <Route exact path="/new/" component={CreateView} />
     <Route exact path='/note/:noteId' component={NoteView} />
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
