import React from "react";

class Login extends React.Component {
	state = {
		username: "",
		password: "",
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div className="RegisterWrapper">
				<form
					className="Register__form"
					onSubmit={event => {
						event.preventDefault();
						this.props.onSubmit({
							username: this.state.username,
							password: this.state.password,
						});
					}}
				>
					<input
						type="text"
						placeholder="Username"
						value={this.state.username}
						name="username"
						autoComplete="off"
						onChange={this.handleChange}
					/>
					<input
						type="text"
						placeholder="Password"
						value={this.state.password}
						name="password"
						autoComplete="off"
						onChange={this.handleChange}
					/>
					<button className="Button">Submit</button>
				</form>
			</div>
		);
	}
}

export default Login;
