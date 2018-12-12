import React from "react";
import axios from "axios";

class Register extends React.Component {
	state = {
		username: "",
		password: "",
		passwordRepeat: "",
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div className="RegisterWrapper">
				<form
					onSubmit={event => {
						event.preventDefault();
						this.props.onSubmit({
							username: this.state.username,
							password: this.state.password,
						});
					}}
					className="Register__form"
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
					<input
						type="text"
						placeholder="Repeat Password"
						value={this.state.passwordRepeat}
						name="passwordRepeat"
						autoComplete="off"
						onChange={this.handleChange}
					/>
					<button className="Button">Submit</button>
				</form>
			</div>
		);
	}
}

export default Register;
