import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import List from './components/list';
import Form from './components/form';
import SideBar from './components/sideBar';
import { newNote,cancelNote,changeTitle,changeContent,submitNote } from './actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
	  <SideBar adding={this.props.newNote} viewing={this.props.cancelNote} />
	  {this.props.posting ? 
	  <Form title={this.props.newPostTitle} content={this.props.newPostContent} 
	  changeTitle={this.props.changeTitle} changeContent={this.props.changeContent}
	  submitNote={this.props.submitNote}	/>
	  :
	  <List props={this.props.posts} />
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
	posting:state.posting
	};
};

export default connect(stateToProps, { newNote,cancelNote,changeTitle,changeContent,submitNote })(App);
