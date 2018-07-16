import React, { Component } from 'react';
import ListView from './ListView'
import CreateNoteView from './CreateNoteView'
import { Route } from 'react-router-dom';

class Content extends Component {
  render() {
    return (
      <div>
        {/* Home Page */}
        <Route exact path="" render={(props) => <ListView {...props} notes={this.props.notes} />} /> 
        {/* List Notes View */}
        <Route path="/list-notes" render={(props) => <ListView {...props} notes={this.props.notes} />} /> 
        {/* Create Notes View */}
        <Route exact path="/create-note" render={(props) => <CreateNoteView {...props} saveNewNote={this.props.saveNewNote}/>} />
      </div>
    );
  }
}

export default Content;