import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { viewall,viewone,deleteNote,addNew,createNote,editNote,edit } from './actions/action';
import SideBar from './components/SideBar';
import Notes from './components/Notes';
import AddNew from './components/addNew';

class App extends Component {
  render() {
    return (
		<div className="App">
		<SideBar viewall={this.props.viewall} adding={this.props.addNew} />
		{this.props.view || this.props.view===0 ? (
		<Notes notes={this.props.notes} viewone={this.props.viewone} deleteNote={this.props.deleteNote} view={this.props.view} 
		editNote={this.props.editNote} />
		) : (
		null
		)}
		{this.props.adding || this.props.editing || this.props.editing===0 ? (
		<AddNew createNote={this.props.createNote} editing={this.props.editing} notes={this.props.notes}
			edit={this.props.edit} />
		):(
		null	
		)
		}
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
})
}

export default connect (map, ( {viewall,viewone,deleteNote,addNew,createNote,editNote,edit} ))(App);