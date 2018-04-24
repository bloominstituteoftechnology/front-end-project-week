import React, { Component } from "react";
// material components
import RaisedButton from "material-ui/RaisedButton";
// styles
import "../styles/ControlPanel.css";

class ControlPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return [
			<h3 className="ControlPanel_header">
				Lambda<br />Notes
			</h3>,
			<RaisedButton className="ControlPanel_button" primary={true}>
				View Your Notes
			</RaisedButton>,
			<RaisedButton className="ControlPanel_button" primary={true}>
				Create Todo
			</RaisedButton>
		];
	}
}

export default ControlPanel;
