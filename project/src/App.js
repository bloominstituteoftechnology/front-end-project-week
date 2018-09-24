import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { viewall,viewone,deleteNote } from './actions/action';
import SideBar from './components/SideBar';
import Notes from './components/Notes';
import OneNote from './components/OneNote';

class App extends Component {
  render() {
    return (
		<div className="App">
		<SideBar viewall={this.props.viewall} />
		{this.props.view==="all" ? (
		<Notes notes={this.props.notes} viewone={this.props.viewone} />
		) : (
		<OneNote index={this.props.view} note={this.props.notes[this.props.view]} deleteNote={this.props.deleteNote} />
		)}
		
		</div>
    );
  }
}

const map = (state) => {
return(
{
notes:state.notes,
error:state.error,
view:state.view,
editing:state.editing,
adding:state.adding,
deleting:state.deleting,
})
}

export default connect (map, ( {viewall,viewone,deleteNote} ))(App);