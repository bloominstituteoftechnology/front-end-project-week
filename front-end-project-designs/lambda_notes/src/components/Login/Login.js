import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";

const LoginBackground = styled.div`
	width: 100%;
	height: 100vh;
    background: url('trianglify.svg');
    background-size: cover; 
    background-repeat: no-repeat;

    h1 {
        width: 100%;
        display: inline-block;
        text-align: center;
        font-size: 72px;
        color: #fff;
    }
`

const LoginFormContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
    width: 30%;
    min-width: 400px;
    height: 40%;
    min-height: 350px;
	background-color: rgba(240,240,240,0.6);
	/* border: 5px solid #24b8bd; */
	border-radius: 8px;
	margin: 0 auto;
	padding: 0 100px 20px;

	
	.login-form {
		display: flex;
		align-items: center;
		flex-direction: column;
        width: 80%;
	}

	h3 {
        text-align: center;
        font-size: 24px;
	}

	a {
		text-decoration: none;
		text-align: center;
		margin-top: 40px;
		font-family: Helvetica, sans-serif;
        color: #222222;
        font-weight: bold;

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

const LoginButton = styled.button`
	width: 200px;
	min-width: 200px;
    padding: 10px 40px;
    margin-top: 20px;
	background-color: #24b8bd;
	color: #f3f9f9;
	border: 0;
	border-radius: 5px;
	font-size: 1rem;
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
