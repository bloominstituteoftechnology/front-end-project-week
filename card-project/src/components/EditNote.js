import React from 'react';
import LambdaSide from './LambdaSide';

import {updateNote } from '../actions/actions';
import { connect } from 'react-redux';

const textarea = {
	width: '90%',
	height: 300,
	padding: '12px 20px',
	boxSizing: 'border-box',
	border: '2px solid #ccc',
	borderRadius: '4px',
	backgroundColor: '#f8f8f8',
	resize: 'none',
	marginTop: 20
};
const bStyle = {
	marginTop: 20,
	width: '28.33%',
	backgroundColor: '#25b8bd',
	cursor: 'pointer',
	color: 'white',
	height: 50,
	fontWeight: 'bold',
	fontSize: 20
};
const mainSt = {
	marginLeft: '5%',
	paddingTop: 55
};
const tStyle = {
	width: '47%',
	height: 40,
	marginTop: 10
};
const hSt = {
	fontWeight: 'bold'
};

class EditNote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			note: ''
		};
	}
	
	componentDidMount() {
		this.props.notes;
		console.log('INSIDE EDITNOTE, ID IS, ID: ',this.props.idE);
		console.log(this.props)
	}
	
	handleTextInput = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};
	newNote = (e) => {
		e.preventDefault();
		console.log('title: ', this.state.title);
		console.log('note: ', this.state.note);
		const noteObject = { title: this.state.title, note: this.state.note};
		this.props.updateNote(noteObject,this.props.idE);
		this.setState({
            title: '',
            note: ''
        })

		// let nNote = 
		// alert('Edit note coming soon, as MVP is approved' + '    Title: ' + this.state.title + ',     Note: ' + this.state.note);
	};
	render() {
		return (
			<div style={mainSt}>
				<h3 style={hSt}>Edit Note:</h3>
				<input
					style={tStyle}
					type="text"
					name="title"
					value={this.state.title}
					placeholder="Note Title"
					onChange={this.handleTextInput}
				/>
				<input
					style={textarea}
					type="text"
					name="note"
					value={this.state.note}
					placeholder="Note Content"
					onChange={this.handleTextInput}
				/>
				<button onClick={this.newNote} style={bStyle}>
					Update
				</button>
			</div>
		);
	}
}
const mapDispatchToProps = (state) => {
	return {
		notes: state.notes
		// titles: state.titles
	};
};
export default connect(mapDispatchToProps, {  updateNote })(EditNote);
// export default EditNote;
