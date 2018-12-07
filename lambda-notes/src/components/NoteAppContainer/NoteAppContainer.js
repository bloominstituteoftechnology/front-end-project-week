import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { withRouter, Switch } from 'react-router'
import { fetchNotes }from '../../actions'
import Sidebar from '../Sidebar/Sidebar'
import EditView from '../NoteAppViews/EditView'
import CreateView from '../NoteAppViews/CreateView'
import SingleNoteView from '../NoteAppViews/SingleNoteView'
import './NoteAppContainer.css'
import DefaultView from '../NoteAppViews/DefaultView'
import DeleteView from '../NoteAppViews/DeleteView';

class NoteAppContainer extends React.Component {

 componentDidMount(){
  this.props.fetchNotes()
 }
 render() {
 
  return (
   <div className="note_app_container">
     <Sidebar />
     <Route exact path="/" render={(props) => <DefaultView {...props} />} />
     <Route path="/edit/:noteId" render={(props) => <EditView notes={this.props.notes} {...props}/> }/>
     {/* <Route exact path ="/edit/:noteId" render={() => <EditView {...this.props} />} /> */}
     <Route exact path="/new/" component={CreateView} />
     <Route  path="/note/:noteId/delete/" component={DeleteView}/>
     <Route path='/note/:noteId' render={(props) => <SingleNoteView notes={this.props.notes} {...props}/>}/>
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
