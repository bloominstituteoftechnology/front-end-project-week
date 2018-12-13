import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input,
} from "reactstrap";

const LoginBackground = styled.div`
	width: 100%;
	height: 100vh;
	background: url("trianglify.svg");
	background-size: cover;
	background-repeat: no-repeat;

	h1 {
		width: 100%;
		margin-top: 100px;
		display: inline-block;
		text-align: center;
		font-size: 72px;
		font-weight: bold;
		color: #fff;
	}
`;

const LoginFormContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	width: 45%;
	min-width: 400px;
	height: 40%;
	min-height: 350px;
	background-color: rgba(240, 240, 240, 0.6);
	/* border: 5px solid #24b8bd; */
	border-radius: 8px;
	margin: 100px auto;
	padding: 0 20px 20px;

	.login-form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 90%;
	}

	h3 {
		text-align: center;
		font-size: 24px;
		margin: 30px 0 40px;
	}

	.create-account-link {
		display: inline-block;
		width: 100%;
		text-decoration: none;
		text-align: center;
		margin-top: 40px;
		font-family: Helvetica, sans-serif;
		color: #222222;
        font-weight: bold;
        cursor: pointer;

		.strong {
			font-weight: bold;

			&:hover {
				text-decoration: underline;
				color: #333;
			}
		}
		&:hover {
			text-decoration: none;
			color: #b92f27;
		}
	}
`;
const LoginInput = styled.input`
	width: 80%;
	min-width: 200px;
	background-color: #ffffff;
	color: #20272d;
	border: 1px solid #efefef;
	border-radius: 20px;
	padding: 10px;
	margin: 10px;
	font-size: 0.8rem;

	&:focus {
		outline: 0;
		-moz-box-shadow: 0px 0px 0px 2px #24b8bd;
		-webkit-box-shadow: 0px 0px 0px 2px #24b8bd;
		box-shadow: 0px 0px 0px 2px #24b8bd;
	}
`;

const MainLoginButton = styled.button`
	width: 200px;
	min-width: 200px;
	padding: 10px 40px;
	margin: 20px auto 10px;
	background-color: #24b8bd;
	color: #f3f9f9;
	border: 0;
	border-radius: 5px;
	font-size: 1rem;
	cursor: pointer;
	letter-spacing: 0.1rem;

	&:hover {
		background-color: #00858a;
	}
`;

// ================== END STYLES

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: this.username,
			password: this.password,
			modal: false,
		};
		this.toggle = this.toggle.bind(this);
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	login = () => {
		localStorage.setItem("username", this.state.username);
		localStorage.setItem("password", this.state.password);
	};

	toggle() {
		this.setState({
			modal: !this.state.modal,
		});
	}

	render() {
		return (
			<LoginBackground>
				<h1>Lambda Notes</h1>
				<LoginFormContainer>
					<h3>Sign in to view notes</h3>
					<form className="login-form" onSubmit={this.login}>
						<LoginInput
							type="text"
							placeholder="username"
							className="username-input"
							name="username"
							value={this.state.username}
							onChange={this.handleChange}
							required
						/>
						<LoginInput
							type="password"
							placeholder="password"
							className="password-input"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>

						<MainLoginButton type="submit" onSubmit={this.login}>
							Sign in <i class="fas fa-sign-in-alt" />
						</MainLoginButton>
					</form>
					<div className="create-account-link" onClick={this.toggle}>
						Create an account <i class="fas fa-user-circle" />
					</div>
					<div>
						<Modal
							isOpen={this.state.modal}
							toggle={this.toggle}
                            className={this.props.className}
                            centered={true}
						>
							<ModalHeader toggle={this.toggle}>
								Create a Lambda Notes account
                                
							</ModalHeader>
							<ModalBody>
                                <p>All fields are required</p>
								<Form>
									<FormGroup>
										<Label for="email">Email</Label>
										<Input
											type="email"
											name="email"
											id="email"
                                            placeholder="email"
                                            required
										/>
									</FormGroup>
                                    <FormGroup>
										<Label for="username">Username</Label>
										<Input
											type="text"
											name="username"
											id="username"
                                            placeholder="username"
                                            required
										/>
									</FormGroup>
									<FormGroup>
										<Label for="password">
											Password
										</Label>
										<Input
											type="password"
											name="password"
											id="password"
                                            placeholder="password"
                                            required
										/>
									</FormGroup>
								</Form>
							</ModalBody>
							<ModalFooter>
								<Button color="primary" onClick={console.log('submit')} disabled>
									Submit
								</Button>
								<Button color="secondary" onClick={this.toggle}>
									Cancel
								</Button>
							</ModalFooter>
						</Modal>
					</div>
				</LoginFormContainer>
			</LoginBackground>
		);
	}
}

export default Login;
