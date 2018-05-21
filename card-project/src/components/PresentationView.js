import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

import { addNote, deleteNote, checkUpdate } from '../actions/actions';
import { connect } from 'react-redux';

const bStylec = {
	marginTop: 20,
	width: '40%',
	backgroundColor: '#25b8bd',
	cursor: 'pointer',
	color: 'white',
	height: 50,
	fontWeight: 'bold',
	fontSize: 20,
	marginLeft: '8%',
	marginRight: '10%'
};
const bStyled = {
	marginTop: 20,
	width: '100%',
	paddingRight: 60,
	paddingLeft: 60,
	backgroundColor: 'red',
	cursor: 'pointer',
	color: 'white',
	height: 50,
	fontWeight: 'bold',
	fontSize: 20,
	marginLeft: '15%',
	marginRight: '30%'
};
const warning = {
	textAlign: 'center'
};
const noteSt = {
	padding: 30
};
const linkSte = {
	justifyContent: 'center',
	marginLeft: '87%',
	marginRight: '2%',
	textAlign: 'center'
};

const hide = {
	display: 'none'
};
const inpSt = {
	width:50,
	 height:50
}
const lst = {
	fontSize: 24
}
let noteI = [];
let titleI = [];
let dcheck;
let dcolor = 'red';
let dcomplete = 'NOT COMPLETE';
class PresentationView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			list: this.props.notes,
			checked: true,
			Complete: 'NOT COMPLETE',
			ccolor : 'red',
		};
		this.toggle = this.toggle.bind(this);
	}
	componentDidMount() {
		this.refresh();
	}
	refresh = () => {
		this.props.notes;
	};

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	handleDelete = (id) => {
		this.props.deleteNote(this.props.notes[id]);
		noteI = [];
		titleI = [];
		this.refresh();
		this.setState({
			modal: !this.state.modal
		});
	};
	handleInputChange = (event) => {		
		this.setState({checked: this.state.checked === false ? true : false});
		this.setState({ccolor: this.state.ccolor === 'red' ? 'blue' : 'red' });
		// this.setState({Complete: this.state.Complete === 'NOT COMPLETE' ? 'COMPLETED' : 'NOT COMPLETE'});
		this.props.checkUpdate(this.state.checked, this.props.id);
		
	}

	render() {
		noteI = [];
		titleI = [];
		dcheck = [];
		dcomplete = '';
		return (
			<div>
				<div>
					<Link to={`/notes/edit/${this.props.id}`} style={linkSte}>
						<span style={lst} >edit</span>
					</Link>

					<Link to={`#`} onClick={this.toggle} >
						<span style={lst} >delete</span>
					</Link>

					{this.props.notes.map((note, i) => {
						return (
							<div style={hide} key={note + i}>
								{noteI.push(note.note)}
								{titleI.push(note.title)}
								{dcheck.push(note.check)}
							</div>
						);
					})}
					<div style={hide}>
					{dcheck[this.props.id] === false ? dcolor = 'red' : dcolor = 'blue'};
					{dcheck[this.props.id] === false ? dcomplete = 'NOT COMPLETE' : dcomplete = 'COMPLETED'};
					</div>
					<div style={noteSt}>
						<h1>{titleI[this.props.id]}</h1>
						<h4>Complete Status: <span style={{color : dcolor}}> {dcomplete} </span> </h4>
							<input
								name="checkedB"
								type="checkbox"
								checked={dcheck[this.props.id]}
								onChange={this.handleInputChange}
								style={inpSt}
							/>
						{noteI[this.props.id]}
						<label>

						</label>
					</div>
				</div>

				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalBody style={warning}>Are you sure you want to delete this?</ModalBody>
					<ModalFooter>
						<Link to={`/`} onClick={() => this.handleDelete(this.props.id)}>
							<Button color="primary" style={bStyled}>
								Delete
							</Button>
						</Link>
						<Button color="secondary" onClick={this.toggle} style={bStylec}>
							No
						</Button>
					</ModalFooter>
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
export default connect(mapDispatchToProps, { addNote, deleteNote, checkUpdate })(PresentationView);
