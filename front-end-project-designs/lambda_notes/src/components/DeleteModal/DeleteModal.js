import React from "react";
import styled from "styled-components";
import axios from 'axios';

const ModalOverlay = styled.div`
	height: 100vh;
	width: 100vh;
	background-color: rgba(221, 221, 221, 0.5);
`;

const ModalContainer = styled.div`
	border: 2px solid #a5a5a5;
	background-color: #fbfbfb;
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

const deleteNote = () => {
    axios
        .delete(
            `https://fe-notes.herokuapp.com/note/delete/${this.props.note.id}`
        )
        .then(res => console.log("Delete Note ", res))
        .catch(err => console.log("Delete Server Error", err));
}



const DeleteModal = props => {
    console.log('modal props', props)
	return (
		<ModalOverlay>
			<ModalContainer>
				<h2>Are you sure you want to delete this?</h2>
				<DeleteButton onClick={deleteNote}>Delete</DeleteButton>
				<ModalButton onClick={props.history.goBack}>No</ModalButton>
			</ModalContainer>
		</ModalOverlay>
	);
};

export default DeleteModal;
