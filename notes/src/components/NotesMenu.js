import React from 'react';
import styled from 'styled-components';

const MenuContainerDiv = styled.div`
	display: flex;
	justify-content: flex-row;
	align-items: center;
	flex-direction: column;
	background-color: #D3D2D3;
	border-bottom: 1px solid lightgrey;
	width: 25%;
	padding: 2%;
`;

const Header1 = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	margin-bottom: 20px;
`;

export const Button = styled.button`
	width: 170px;
	height: 30px;
	border: grey solid 1px;
	color: white;
	text-align: center;
	background-color: #2AC0C4;
	margin-bottom: 20px;
	font-size: 1.4rem;
	font-weight: bold;
	&:hover {
		cursor:pointer;
	}
`;

class NotesMenu extends React.Component {
	constructor(props) {
		super(props);
    	this.state = {
    	}
    };

	changeHandler = event => {
  		this.props.changeView({id: null, currentView:event.target.value});
  	};

	render() {
	
			return(
				<MenuContainerDiv>
					<Header1>Lambda Notes</Header1>
					<Button
						onClick={this.changeHandler} 
						value="notes"
					>View Your Notes</Button>
					<Button 
						onClick={this.changeHandler} 
						value="add"
					>+ Create New Note</Button>
				</MenuContainerDiv>
			);
	}

}

export default NotesMenu;