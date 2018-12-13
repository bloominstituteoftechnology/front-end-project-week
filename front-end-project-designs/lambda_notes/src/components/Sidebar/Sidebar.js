import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// import SearchForm from "../SearchForm/SearchForm";

const SidebarContainer = styled.div`
	position: fixed;
	background-color: #d3d2d3;
	min-height: 100vh;
	min-width: 250px;
	max-width: 250px;
	padding: 20px 0;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	border-left: 2px solid #bebebe;
	border-right: 5px solid #bebebe;
	text-decoration: none;

	.sidebar-link {
		text-decoration: none;
	}
`;

const NavBar = styled.div`
	width: 15%;
	text-align: right;
	font-size: 24px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: #bebebe;
	align-self: flex-end;

	i {
		margin: 5px;
		color: #545354;
		cursor: pointer;

		&:hover {
			color: #24b8bd;
		}
	}
`;

const MainHeader = styled.h1`
	color: #414141;
	font-weight: bold;
	margin-left: 20px;
`;

const SidebarButton = styled.div`
	width: 200px;
	background-color: #24b8bd;
	color: #f3f9f9;
	padding: 8px 15px;
	margin: 12px auto;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		background-color: #00858a;
	}
`;

const LogOutButton = styled.button`
	margin-top: auto;
`;

const ModalButton = styled.button`
	background-color: #24b8bd;
	border: 0;
	color: #f3f9f9;
	padding: 12px 15px;
	margin: 15px 50px;
	width: 180px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		background-color: #0B9FA4;
	}
`;


// ================ END STYLES
class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	}

	render() {
		return (
			<>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className="logOut-modal"
					centered={true}
				>
					<ModalBody className="mod-body">
						Are you sure you want to sign out?
					</ModalBody>
					<ModalFooter className="mod-footer">
						<LogOutButton
							onClick={() => {
								this.props.logOut();
								this.toggle();
							}}
						>
							Delete
						</LogOutButton>
						<ModalButton onClick={this.toggle}>No</ModalButton>
					</ModalFooter>
				</Modal>
				<SidebarContainer>
					<NavBar>
						<i class="fas fa-user-alt" />
						<Link to="/settings">
							<i class="fas fa-cog" />
						</Link>
						<i class="fas fa-sign-out-alt" onClick={this.toggle} />
					</NavBar>

					<MainHeader>Lambda Notes</MainHeader>
					<Link
						to="/notes"
						onClick={this.props.getNotes}
						className="sidebar-link"
					>
						<SidebarButton>View Your Notes</SidebarButton>
					</Link>
					<Link to="/addnewnote" className="sidebar-link">
						<SidebarButton href="#">
							+ Create New Note
						</SidebarButton>
					</Link>
					{/* <SearchForm /> */}

					{/* <LogOutButton onClick={props.logOut}>Log Out</LogOutButton> */}
				</SidebarContainer>
			</>
		);
	}
}

export default Sidebar;
