import React, { Component } from "react";
// import { Provider, Consumer } from '../Provider';

// import { Consumer } from '../Provider';

class LoginForm extends Component {
	state = { ...this.state };

	render() {
		return
				{( value => {
				const { viewer } = value.state;
				const { logIn, logOut } = value.actions;
					return ( viewer ? (
						<React.Fragment>
							<h3>Logged In As: {viewer}</h3>
							<button onClick={logOut}>Log Out</button>
						</React.Fragment>
							) : (
						<React.Fragment>
							<input placeholder="Whooo are you?"
							ref={r => (this.inputRef = r)} />
							<button type="submit" 
							onClick={() => {
							logIn(this.inputRef.value) }}>
							Log In
							</button>
						</React.Fragment>
					)
					);
				})}
	}
}

export default LoginForm;