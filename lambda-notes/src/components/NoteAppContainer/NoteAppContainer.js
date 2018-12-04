import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { fetchNotes }from '../../actions'
import Sidebar from '../Sidebar/Sidebar'
import EditView from '../NoteAppViews/EditView'
import CreateView from '../NoteAppViews/CreateView'
import SingleNoteView from '../NoteAppViews/SingleNoteView'
import NoteView from '../NoteAppViews/NoteView'
import './NoteAppContainer.css'
import DefaultView from '../NoteAppViews/DefaultView'
import Note from '../NoteContainer/Note'

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
     <Sidebar />
     <Route exact path="/" render={(props) => <DefaultView {...props} />} />
     <Route path="/edit/" render={(props) => <EditView notes={this.props.notes} {...props}/> }/>
     <Route path ="/edit/:noteId" component={EditView} />
     <Route exact path="/new/" component={CreateView} />
     <Route exact path='note/' render={(props) => <NoteView notes={this.props.notes} {...props}/>}/>
     <Link to="/note/:noteId"/>
     <Route path='note/:noteId' component={SingleNoteView} />
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

export default withRouter(connect(mapStateToProps, { fetchNotes })(NoteAppContainer));
