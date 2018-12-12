import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";

const LoginBackground = styled.div`
	width: 100%;
	height: 100vh;
    background: no-repeat center/110% url('https://images.unsplash.com/photo-1544571132-f7e03b89af5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80');
    /* background-repeat: no-repeat; */
`;

const LoginFormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 40%;
	height: 40%;
	background-color: rgba(240,240,240,0.8);
	/* opacity: 0.8; */
	border: 5px solid #24b8bd;
	border-radius: 15px;
	margin: 0 auto;
	padding: 0 100px 20px;

	
	.login-form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 60%;
	}

	h3 {
		text-align: center;
	}

	a {
		text-decoration: none;
		text-align: center;
		margin-top: 40px;
		font-family: Helvetica, sans-serif;
		color: #999999;

		.strong {
			font-weight: bold;

			&:hover {
				text-decoration: underline;
				color: #333;
			}
		}
		&:hover {
			text-decoration: none;
			color: #00858A;
		}
	}
`;
const LoginInput = styled.input`
	width: 100%;
	min-width: 200px;
	background-color: #ffffff;
	color: #20272d;
	border: 1px solid #efefef;
	border-radius: 2px;
	padding: 10px;
	margin: 10px;
	font-size: 0.8rem;
`;

const LoginButton = styled.button`
	width: 30%;
	min-width: 200px;
	padding: 10px 40px;
	background-color: #24b8bd;
	color: #f3f9f9;
	border: 0;
	border-radius: 5px;
	font-size: 0.9rem;
	cursor: pointer;
	letter-spacing: 0.1rem;

	&:hover {
		background-color: #00858A;
	}
`;

// ================== END STYLES

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			username: this.username,
			password: this.password,
		};
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

	render() {
		return (
			<LoginBackground>
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
						<LoginButton type="submit" onSubmit={this.login}>
							Sign in
						</LoginButton>
						<a href="#">Create an account </a>
					</form>
				</LoginFormContainer>
			</LoginBackground>
		);
	}
}

export default Login;
