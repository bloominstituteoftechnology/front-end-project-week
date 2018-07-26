import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import List from './components/list';
import Form from './components/form';
import SideBar from './components/sideBar';
import { newNote,cancelNote } from './actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
	  <SideBar adding={this.props.newNote} viewing={this.props.cancelNote} />
	  {this.props.posting ? 
	  <Form title={this.props.newPostTitle} content={this.props.newPostContent} />
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

export default connect(stateToProps, { newNote,cancelNote })(App);
