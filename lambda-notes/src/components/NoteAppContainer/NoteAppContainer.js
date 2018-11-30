import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { fetchNotes }from '../../actions'
import Sidebar from '../Sidebar/Sidebar'
import EditView from '../NoteAppViews/EditView'
import CreateView from '../NoteAppViews/CreateView'
import NoteView from '../NoteAppViews/NoteView'
import './NoteAppContainer.css'
import DefaultView from '../NoteAppViews/DefaultView'

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
     <Route path="/edit/:noteId" component={EditView}/>
     <Route exact path="/new/" component={CreateView} />
     <Route exact path='/note/:noteId' render={(props) => <NoteView {...props}/>} />
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
