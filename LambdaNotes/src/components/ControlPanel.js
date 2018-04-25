import React, { Component } from "react";
import { Link } from "react-router-dom";
// material components
import RaisedButton from "material-ui/RaisedButton";
// styles
import "../styles/ControlPanel.css";

class ControlPanel extends Component {
	render() {
		return [
			<h3 className="ControlPanel_header">
				Lambda<br />Notes
			</h3>,
			<Link to="/">
				<RaisedButton className="ControlPanel_button" primary={true}>
					View Your Notes
				</RaisedButton>
			</Link>,
			<Link to="/addTodo">
				<RaisedButton className="ControlPanel_button" primary={true}>
					Create Todo
				</RaisedButton>
			</Link>
		];
	}
}

export default ControlPanel;
