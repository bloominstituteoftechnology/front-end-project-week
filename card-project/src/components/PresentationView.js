import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal,  ModalBody, ModalFooter } from 'reactstrap';


import { addNote, deleteNote } from '../actions/actions';
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
	textAlign: 'center'
};

const hide = {
	display: 'none'
};
let noteI = [];
let titleI = [];

class PresentationView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			list: this.props.notes
		};
		this.toggle = this.toggle.bind(this);
	}
	componentDidMount() {
		this.refresh();

	}
	refresh = () => {
		this.props.notes;
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	handleDelete = (id) => {
		
		this.props.deleteNote(this.props.notes[id]);
		noteI=[];
		titleI=[];
		this.refresh();
		this.setState({
			modal: !this.state.modal
		});
	};

	render() {
		noteI=[];
		titleI=[];
		return (
			<div>
				<div>
					<Link to={`/notes/edit/${this.props.id}`} style={linkSte}>
						Edit
					</Link>

					
					<Link to={`#`} onClick={this.toggle}>
						Delete
					</Link>

					{this.props.notes.map((note, i) => {
						return (
							
							<div style={hide} key={note + i} >
								{noteI.push(note.note)}
								{titleI.push(note.title)}
							</div>
			
						);
					})}
					<div style={noteSt}>
						
						<h1>{titleI[this.props.id]}</h1>
						{noteI[this.props.id]}
					</div>
				</div>

				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalBody style={warning}>Are you sure you want to delete this?</ModalBody>
					<ModalFooter>
					<Link to={`/`}  onClick={() => this.handleDelete(this.props.id)}  >	
									<Button color="primary" style={bStyled}  >		
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
export default connect(mapDispatchToProps, { addNote, deleteNote })(PresentationView);

