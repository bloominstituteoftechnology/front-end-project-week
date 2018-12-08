import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import EditView from './components/NoteAppViews/EditView'
import CreateView from './components/NoteAppViews/CreateView'
import Note from './components/NoteContainer/Note'
import { connect } from 'react-redux'
import NoteView from './components/NoteAppViews/NoteView'
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer'
import SingleNoteView from './components/NoteAppViews/SingleNoteView';

class App extends Component {
  render() {
    return (
     <div className="App">
      <Sidebar/>
      <Switch>
      <Route exact path="/" component={NoteContainer}/>
      <Route exact path="/edit/:id" component={EditView}/>
      <Route path="/new/" component={CreateView} />
      <Route exact path='/note/' render={() => <NoteView {...this.props} notes={this.props.notes}/>}/>
      <Route exact path='/note/:noteId' component={EditView} />
      </Switch>
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

export default connect(mapStateToProps)(App)
