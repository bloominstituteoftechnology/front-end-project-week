import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import '../index.css'
import {StyledButton} from './styles'

const Modal = props => (
	<div className={props.deleteMode ? "show-modal" : "hide-modal"}>
		<div className="delete-prompt">
			<h4>Sure you want to delete this note?</h4>
				<Link to="/notes">
                    <StyledButton onClick={props.handleDelete}>
					Yes
					</StyledButton>
				</Link>
				<StyledButton onClick={props.handleClose}>
					No
				</StyledButton>
			</div>
		</div>
);

export default Modal;