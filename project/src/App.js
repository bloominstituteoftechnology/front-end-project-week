import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
	  <div className="posts">
	  { this.props.posts.map(post => {
		  return(
		<div key={Math.random(Date.now())} className="card">
			<div className="title">
			{post.title}
			</div>
			<div className="content">
			{post.content.length > 199 ? `${post.content.slice(0,199)}`+'...' : post.content}
			</div>
		</div>
		
	  )})	}
      </div>
	  </div>
    );
  }
}

const stateToProps = (state) => {
return {
	posts:state.posts
	};
};

export default connect(stateToProps)(App);
