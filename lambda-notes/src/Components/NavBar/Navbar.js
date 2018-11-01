import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

// import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			show: false
		};
	}

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	render() {
		return (
			<StyledContainer>
				<Modal
					show={this.showModal}
					id={this.props.id}
					handleClose={this.hideModal}
					deletePost={this.props.deletePost}
				/>
			</StyledContainer>
		);
	}
}

export default Navbar;

export const StyledContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding: 20px;
`;
