import React from 'react';
import './modal.css';
import styled from 'styled-components';

class ModalState extends React.Component {
	state = { show: false };

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<main>
				<Modal show={this.state.show} handleClose={this.hideModal} />
				<UnstyledButton type="button" onClick={this.showModal}>
					delete
				</UnstyledButton>
			</main>
		);
	}
}

const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';

	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<div className="areYouSure">
					<p>Are You Sure you Want to delete this?</p>
				</div>
				<div className="buttons">
					<StyledButton Yes>Delete</StyledButton>
					<StyledButton No onClick={handleClose}>
						No
					</StyledButton>
				</div>
			</section>
		</div>
	);
};

export default ModalState;

export const UnstyledButton = styled.button`
	border: 0;
	text-decoration: underline;
	font-weight: bold;
	background-color: transparent;
	cursor: pointer;
`;

export const StyledButton = styled.button`
	margin: 10px;
	padding: 10px;
	width: 100px;
	border-radius: 3px;
	color: #ffffffff;
	border: 1px solid black;
	font-size: 18px;
	cursor: pointer;
	&:hover {
		background: #000000;
		color: #ffffffff;
	}

	${(props) => (props.Yes ? 'background: #24B8BD' : 'background: #CA001A')};
`;
