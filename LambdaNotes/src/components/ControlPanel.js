import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// actions
import { setVisibilityFilter } from "../actions/index";
// filter types
import { VisibilityFilters } from "../actions/index";
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
				<RaisedButton
					className="ControlPanel_button"
					primary={true}
					onClick={() => {
						this.props.setVisibilityFilter(VisibilityFilters.SHOW_ALL_TODOS);
					}}
				>
					View Your Notes
				</RaisedButton>
			</Link>,
			<Link to="/addTodo">
				<RaisedButton className="ControlPanel_button" primary={true}>
					&#43; Create Todo
				</RaisedButton>
			</Link>,
			<Link to="/">
				<RaisedButton
					className="ControlPanel_button"
					primary={true}
					onClick={() => {
						this.props.setVisibilityFilter(
							VisibilityFilters.SHOW_COMPLETED_TODOS
						);
					}}
				>
					View Complete Tasks
				</RaisedButton>
			</Link>,
			<Link to="/">
				<RaisedButton
					className="ControlPanel_button"
					primary={true}
					onClick={() => {
						this.props.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE_TODOS);
					}}
				>
					View Incomplete Tasks
				</RaisedButton>
			</Link>
		];
	}
}

export default connect(null, { setVisibilityFilter })(ControlPanel);
