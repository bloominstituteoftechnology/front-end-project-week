import React from "react";
import styled from "styled-components";


const ModalOverlay = styled.div`
	height: 100%;
	width: 100%;
	background-color: rgba(221, 221, 221, 0.5);
`;

const ModalContainer = styled.div`
	border: 2px solid #a5a5a5;
	background-color: #fbfbfb;
	position: fixed;
	top: 35%;
	left: 40%;
	width: 500px;
	height: 250px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const ModalButton = styled.button`
	background-color: #24b8bd;
	border: 0;
	color: #f3f9f9;
	padding: 12px 15px;
	margin: 15px;
	width: 180px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
`;

const DeleteButton = styled(ModalButton)`
	background-color: #d0011b;
`;

// ===================== END STYLES

class DeleteModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: this.props.note,
		};
	}

	render() {
		return (
			<ModalOverlay>
				<ModalContainer>
					<h2>Are you sure you want to delete this?</h2>
					<DeleteButton
						onClick={() => {
                            this.props.deleteNote(this.props.match.params.noteId);
                            setTimeout( () => this.props.history.push(`/notes`), 250);
						}}
					>
						Delete
					</DeleteButton>
					<ModalButton onClick={this.props.history.goBack}>
						No
					</ModalButton>
				</ModalContainer>
			</ModalOverlay>
		);
	}
}

export default DeleteModal;
