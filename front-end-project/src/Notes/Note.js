import React, { Component } from 'react';

class Note extends Component{
	render(){
		return(
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

export default Note;
