import React from 'react';
import ModalComponent from './ModalComponent';
import { Link } from 'react-router-dom';
import { addNote, deleteNote, addTag } from '../actions/actions';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

// const cStyle = {
// 	marginLeft: '10%',
// 	border: '2px solid red',
// 	display: 'flex'
// };

// const lStyle = {
// 	width: '20%',
// 	marginLeft: '1%',
// 	marginRight: '1%',
// 	display: 'inline-block',
// 	height: 1000,
// 	border: '2px solid red'
// };
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
	// borderBottom: '1px solid gray',
	fontWeight: 'bold',
	fontSize: 20
};
const tagSt = {
	cursor: 'context-menu',
	marginLeft: 20,
	paddingLeft: 10,
	paddingRight: 10,
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
let dcolor = 'red';
let dcomplete = 'NOT COMPLETE';
export class PresentationMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			renderB: true,
			modal: false,
			list: this.props.notes,
			tag: '',
			isGoing: true
		};
	}

	componentDidMount() {
		this.props.notes;
	}
	handleInputChange = (e) =>  {
		let name = e.target.name;
		this.setState({ [e.target.name]: e.target.value });

		console.log(e.target.name);
		console.log(e.target.value)
	}
	handleTag = (tname, index) => {
		this.setState({ tag: tname });
		this.props.addTag({tag : tname}, index);
	};
	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};
	render() {
		let tempVal;
		console.log('This is the tag: ', this.state.tag);
		return (
			<div style={mainSt}>
				<h4 style={hSt}>Your Notes:</h4>
				{this.props.notes.map((note, i) => {
					tempVal = i;
					{
						note.check === false ? (dcolor = 'red') : (dcolor = 'blue');
					}
					{
						note.check === false ? (dcomplete = 'NOT COMPLETE') : (dcomplete = 'COMPLETED');
					}
					return (
						<Link to={`/notes/view/${i}`} style={icSt} key={note + i}>
							{' '}
							<h6>
								<span style={ntSt}>
									{' '}
									<span style={{ color: dcolor }}>
										{note.title} {`  `}
										{/* <Link to={`#/${i}`} onClick={this.toggle} style={tagSt}>
											...Tag
										</Link> */}
									</span>
								</span>
									{/* <div> */}
										<ModalComponent index={i}  />

								{/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
									<span style={{ fontWeight: 'bold', textAlign: 'center', fontWeight: 'bold' }}>
										Select Tag
									</span>{' '}
									<Button color="primary" style={hSt} onClick={() => this.handleTag('To-Do',`${i}`)}>
										To-Do
									</Button>
									<Button color="primary" style={hSt} onClick={() => this.handleTag('Backlog', `${i}`)}>
										Backlog
									</Button>
									<Button color="primary" style={hSt} onClick={() => this.handleTag('In Progress',`${i}`)}>
										In Progress
									</Button>
									<Button color="primary" style={hSt} onClick={() => this.handleTag('Done',`${i}`)}>
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
										<Button style={{ marginLeft: 10 }} color="primary"onClick={() => this.handleTag(this.state.tag, `${i}`)} >
											Submit
										</Button>
									</div>
									
								</Modal> */}
								{/* </div> */}
								<br />
								{note.note}
							</h6>
						</Link>
					);
				})}
			</div>
		);
	}
}
const mapDispatchToProps = (state) => {
	return {
		notes: state.notes
	};
};

export default connect(mapDispatchToProps, { addNote, deleteNote, addTag })(PresentationMain);
