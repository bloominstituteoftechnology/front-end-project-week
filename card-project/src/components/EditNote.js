import React from 'react';

import {updateNote } from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
		
	}
	
	handleTextInput = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};
	newNote = (e) => {
		// e.preventDefault();
		
		const noteObject = { title: this.state.title, note: this.state.note};
		this.props.updateNote(this.state.title, this.state.note,this.props.idE);
		this.setState({
            title: '',
            note: ''
        })

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
				<Link to={`/`} onClick={this.newNote} style={bStyle}> <button  style={bStyle}>	Update</button>	</Link>
			</div>
		);
	}
}
const mapDispatchToProps = (state) => {
	return {
		notes: state.notes
	};
};
export default connect(mapDispatchToProps, {  updateNote })(EditNote);
