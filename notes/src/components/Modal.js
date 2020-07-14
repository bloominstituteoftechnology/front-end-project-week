import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import '../index.css'
import {StyledButton} from './styles'


const ModalPrompt = styled.div`
	background: #fff;
	border: 1px solid #eee;
	padding: 40px;
	height: 275px;
	width: 400px;
	text-align: center;
	border-radius: 4px;
`

const Modal = props => (
	<div className={props.deleteMode ? "show-modal" : "hide-modal"}>
		<ModalPrompt>
			<h4>Are you sure you want to delete this note?</h4>
				<Link to="/notes">
                    <StyledButton delete onClick={props.handleDelete}>
					Delete
					</StyledButton>
				</Link>
				<StyledButton onClick={props.handleClose}>
					No 
				</StyledButton>
			</ModalPrompt>
		</div>
);

export default Modal;