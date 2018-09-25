import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { viewall,viewone,deleteNote,addNew,createNote,editNote,edit,login,viewmy,logout } from './actions/action';
import SideBar from './components/SideBar';
import Notes from './components/Notes';
import AddNew from './components/addNew';
import Login from './components/Login';
import TopBar from './components/topBar'

class App extends Component {
  render() {
	if(this.props.loggedIn){
    return (
		<div className="App">
		<SideBar viewall={this.props.viewall} adding={this.props.addNew} viewmy={this.props.viewmy} />
		<div className="column">
		<TopBar loggedIn={this.props.loggedIn} logout={this.props.logout} />
		{this.props.view || this.props.view===0 ? (
		<Notes notes={this.props.notes} viewone={this.props.viewone} deleteNote={this.props.deleteNote} view={this.props.view} 
		editNote={this.props.editNote} loggedIn={this.props.loggedIn} />
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
		</div>
    );
	}
//logged in view above, login component below
else{
return(
<div className="App">
<Login loggedIn={this.props.loggedIn} users={this.props.users} login={this.props.login} />
</div>
);
}
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
loggedIn:state.loggedIn,
users:state.users,
})
}

export default connect (map, ( {viewall,viewone,deleteNote,addNew,createNote,editNote,edit,login,viewmy,logout} ))(App);