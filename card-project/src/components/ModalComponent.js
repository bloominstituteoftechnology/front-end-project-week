import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { addNote, deleteNote, addTag } from '../actions/actions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

const icSt = {
	display: 'inline-flex',
	backgroundColor: 'white',
	width: '22%',
	marginLeft: '3%',
	marginRight: '3%',
	border: '1px solid gray',
	padding: 10,
	height: 200,
	cursor: 'pointer',
	marginTop: 10,
	marginBottom: 10,
	overflow: 'hidden'
};
const hSt = {
	fontWeight: 'bold',
	// marginLeft: '3%'?
	marginTop: 10
};
const mainSt = {
	marginLeft: '2%',
	paddingTop: 50
};
const ntSt = {
	display: 'inline-flex',
	width: '100%',
	paddingBottom: 8,
	borderBottom: '1px solid gray'
	// fontWeight: 'bold',
	// fontSize: 20
};
let dval = 'beige';

let tagSt = {
	cursor: 'context-menu',
	// display: 'inline-flex',
	color: 'black',
	// hover: {backgroundColor: 'red'},
	// marginLeft: '2%',
	// paddingLeft: 4,
	// paddingRight: 4,
	backgroundColor: dval,
	// border: '2px solid yellow'
};
let tagSt2 = {
	cursor: 'crosshair',
	display: 'inline-flex',
	fontWeight: 'bold',
	fontSize: 18,
	// display: dval,
	marginLeft: 20,
	// color: 'black',
	// color: this.props.color,
	paddingLeft: 15,
	paddingRight: 15,
	backgroundColor: 'beige',
	border: '2px solid yellow'
};
const aprompt = {
	width: '400%',
	padding: 100
};
const iStyle = {
	// marginLeft: 60,
	marginTop: 10
};
let tempVal;
let linkStyle = {
	cursor: 'context-menu',
	display: 'inline-flex',
	color: 'black',
	// hover: {backgroundColor: 'red'},
	// marginLeft: '2%',
	paddingLeft: 2,
	paddingRight: 2,
	backgroundColor: 'beige',
	border: '2px solid yellow'
};
let dcolor = 'red';
let dcomplete = 'NOT COMPLETE';
class ModalComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			list: this.props.notes,
			tag: '',
			isGoing: true,
			hover: false
		};
	}
	componentDidMount() {
		this.props.notes;
	}
	handleInputChange = (e) => {
		let name = e.target.name;
		this.setState({ [e.target.name]: e.target.value });

		console.log(e.target.name);
		console.log(e.target.value);
	};
	handleTag = (tname, index) => {
		this.setState({ tag: tname });
		this.props.addTag(tname, index);
		this.setState({
			modal: !this.state.modal
		});
		{
			// this.props.notes[this.props.index].tag === '' ? (dval = 'none') : (dval = 'inline-flex');
		}
	};
	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
		
		if (this.state.hover) {
			dval =  'red' ;
		} else {
			(' ');
		}
		{
			dval =  'beige' ;
		}
	};
	render() {
		// tagSt = {
		// 	cursor: 'context-menu',
		// 	display: 'inline-flex',
		// 	color: 'black',
		// 	// hover: {backgroundColor: 'red'},
		// 	// marginLeft: '2%',
		// 	paddingLeft: 2,
		// 	paddingRight: 2,
		// 	backgroundColor: dval,
		// 	border: '2px solid yellow'
		// };

		return (
			<div>
				{console.log('display, dval: ', dval)}

				{/* {
			this.props.notes[this.props.index].tag === "" ? dval = 'none' : dval = 'inline-flex'
        } */}
				{/* {console.log('THIS IS THE CURRENT TAG, this.props.notes.tag: ', this.props.notes[this.props.index].tag)} */}
				<span style={ntSt}>
					{' '}
					<span style={{ color: dcolor }}>
						<Link
							to={`#`}
							onClick={this.toggle}
							
							// style={linkStyle}
							onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}
						>
							<button style={tagSt}>Tag:</button>
							{/* {console.log('any clues: ', this.props)} */}
						</Link>
						{/* <div style={tagSt2}> */}
						{/* <h6 style={tagSt2}> */}
						<span style={tagSt2}>
							<span style={{ color: this.props.color }}> {this.props.notes[this.props.index].tag}</span>
						</span>
						{/* </div> */}
					</span>
				</span>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					{/* <ModalBody  style={aprompt} > */}
					<span style={{ fontWeight: 'bold', textAlign: 'center', fontWeight: 'bold' }}>Select Tag</span>{' '}
					{/* <Link to={`/`} onClick={() => this.handleDelete(this.props.id)}>
							<Button color="primary" style={bStyled}>
								Delete
							</Button>
						</Link> */}
					{/* <Link to={`/`} */}
					<Button color="primary" style={hSt} onClick={() => this.handleTag('To-Do', `${this.props.index}`)}>
						To-Do
					</Button>
					<Button
						color="primary"
						style={hSt}
						onClick={() => this.handleTag('Backlog', `${this.props.index}`)}
					>
						Backlog
					</Button>
					<Button
						color="primary"
						style={hSt}
						onClick={() => this.handleTag('In Progress', `${this.props.index}`)}
					>
						In Progress
					</Button>
					<Button color="primary" style={hSt} onClick={() => this.handleTag('Done', `${this.props.index}`)}>
						Done
					</Button>
					<div>
						<label style={iStyle}>
							Or CUSTOM TAG:
							<input
								onChange={this.handleInputChange}
								placeholder="tag"
								value={this.state.tag}
								name="tag"
							/>
						</label>
						{/* {console.log('inside of presentationMain, props: ', this.props)} */}
						<Button
							style={{ marginLeft: 10 }}
							color="primary"
							onClick={() => this.handleTag(this.state.tag, `${this.props.index}`)}
						>
							Submit
						</Button>
					</div>
				</Modal>
			</div>
		);
	}
}
const mapDispatchToProps = (state) => {
	return {
		notes: state.notes
	};
};

export default connect(mapDispatchToProps, { addNote, deleteNote, addTag })(ModalComponent);
// export default
