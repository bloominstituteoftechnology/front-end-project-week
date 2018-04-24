import React, { Component } from "react";
import "../styles/ControlPanel.css";

class ControlPanel extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Lambda Notes</h3>
				<button className="ControlPanelButton">View Your Notes</button>
				<button className="ControlPanelButton">Create Todo</button>
			</div>
		);
	}
}

export default ControlPanel;
