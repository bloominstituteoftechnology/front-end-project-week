import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Modal, ModalBody } from 'reactstrap';


class NoteView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}

	handleDelete = () => {
		this.toggleModal();
		this.props.deleteNotecard(this.props.selectedNotecard.title);
		this.props.history.push('/');
	}

	toggleModal = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<div className='wrapper'>
				<Row>
					<Col className='alignRight'>
						<span className='toplinks'>
							<Link to ='/EditView'><button className='editButton' color='link'>edit</button></Link></span>
						<span><button className='delButton' onClick={ () => this.toggleModal() }>delete</button></span>
				{this.state.modal ? <Modal isOpen={this.state.modal}>
					<ModalBody className='modalForm'>
						Are you sure you want to delete this?
					</ModalBody>
					<div className='alignCenter'>
						<span className='modalButtons'>
							<Link to='/' onClick={() => this.handleDelete() }>
								<button className='deleteModal'>Delete</button>
							</Link>
						</span>
						<span className='modalButtons'>
							<button className='noModal' onClick={() => this.toggleModal()}>No</button>
						</span>
					</div>
				</Modal> : null}

					</Col>
				</Row>
				<Row>
					<Col>
						<div className='head'>
							<h5>{this.props.selectedNotecard.title}</h5>
						</div>
						<div className='viewNote'>
							<p>{this.props.selectedNotecard.content}</p>
						</div>
					</Col>
				</Row>
			</div>
			);
				}
				}

export default withRouter(NoteView);

//22 May This is another file that took me a long time to figure out because of the modal. Decided to use reactstrap for that and it seems to work. I had to use the internet as my "phone a friend" for the syntax of the modal. That null killed me. The other thing that took me awhile was the handleDelete. It wouldn't go back to the home page after deleting without the history.push part, which is related to the withRouter. If you wrap your NoteView with withRouter, it will be able to access the history properties. This stuff is really useful in a project with a lot of components. It would probably be more useful with Redux, but one thing at a time.
