import React, { Component } from 'react';
import ListView from './ListView'
import CreateNote from './CreateNote'
import { Route } from 'react-router-dom';
import ViewNoteContainer from './ViewNoteContainer'
import EditNoteContainer from './EditNoteContainer';

class Content extends Component {
  render() {
    return (
      <div>
        {/* Home Page */}
        <Route exact path="" render={(props) => <ListView {...props} notes={this.props.notes} />} /> 
        {/* List Notes View */}
        <Route exact path="/list-notes" render={(props) => <ListView {...props} notes={this.props.notes} />} /> 
        {/* Create Notes View */}
        <Route exact path="/create-note" render={(props) => <CreateNote {...props} saveNewNote={this.props.saveNewNote}/>} />
        {/* View Note */}
        <Route exact path="/view-note/:id" render={(props) => <ViewNoteContainer {...props} notes={this.props.notes}/>} />
        {/* Edit Note */}
        <Route exact path="/edit-note/:id" render={(props) => <EditNoteContainer {...props} notes={this.props.notes} editNote={this.props.editNote}/>} />
      </div>
    );
  }
}

export default Content;