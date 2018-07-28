import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import List from './components/list';
import Form from './components/form';
import Alert from './components/alert';
import SideBar from './components/sideBar';
import { newNote,cancelNote,changeTitle,changeContent,submitNote,viewNoteById,
		editNote,submitEdit,deleteConfirm,deleteNote,deleteCancel } from './actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
	  <SideBar adding={this.props.newNote} viewing={this.props.cancelNote} />
	  {this.props.posting ? 
	  <Form title={this.props.newPostTitle} content={this.props.newPostContent} 
	  changeTitle={this.props.changeTitle} changeContent={this.props.changeContent}
	  submitNote={this.props.submitNote} editing={this.props.editing} editNote={this.props.editNote} 
	  submitEdit={this.props.submitEdit} />
	  :
	  <List props={this.props.posts} viewing={this.props.viewing} editNote={this.props.editNote}
		viewNoteById={this.props.viewNoteById} deleteNote={this.props.deleteNote}	/>
	  }
	  {this.props.deleting ?
	  <Alert deleteCancel={this.props.deleteCancel} deleteConfirm={this.props.deleteConfirm} />
	  :
	  null
	  }
	 </div>
    );
  }
}

const stateToProps = (state) => {
return {
	posts:state.posts,
	newPostTitle:state.newPostTitle,
	newPostContent:state.newPostContent,
	posting:state.posting,
	viewing:state.viewing,
	editing:state.editing,
	deleting:state.deleting,
	};
};

export default connect(stateToProps, { newNote,cancelNote,changeTitle,changeContent,
									submitNote,viewNoteById,editNote,submitEdit,deleteConfirm,deleteNote,deleteCancel })(App);
