import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
// actions
import { setVisibilityFilter } from "../actions/index";
// filter types
import { VisibilityFilters } from "../actions/index";
// material components
import Button from "@material-ui/core/Button";
// styles
import "../styles/ControlPanel.css";

class ControlPanel extends Component {
    render() {
        return [
            <h3 className="ControlPanel_header">
                Lambda
                <br />
                Notes
            </h3>,
            <Link to="/">
                <Button
                    variant="contained"
                    className="ControlPanel_button"
                    primary={true}
                    onClick={() => {
                        this.props.setVisibilityFilter(
                            VisibilityFilters.SHOW_ALL_TODOS
                        );
                    }}
                >
                    View Your Notes
                </Button>
            </Link>,
            <Link to="/addTodo">
                <Button
                    variant="contained"
                    className="ControlPanel_button"
                    primary={true}
                >
                    &#43; Create Todo
                </Button>
            </Link>,
            <Link to="/">
                <Button
                    variant="contained"
                    className="ControlPanel_button"
                    primary={true}
                    onClick={() => {
                        this.props.setVisibilityFilter(
                            VisibilityFilters.SHOW_COMPLETED_TODOS
                        );
                    }}
                >
                    View Complete Tasks
                </Button>
            </Link>,
            <Link to="/">
                <Button
                    variant="contained"
                    className="ControlPanel_button"
                    primary={true}
                    onClick={() => {
                        this.props.setVisibilityFilter(
                            VisibilityFilters.SHOW_ACTIVE_TODOS
                        );
                    }}
                >
                    View Incomplete Tasks
                </Button>
            </Link>,
            <Link to="/">
                <Button
                    variant="contained"
                    className="ControlPanel_button"
                    primary={true}
                    onClick={() => {
                        this.props.setVisibilityFilter(
                            VisibilityFilters.SHOW_ARCHIVED_TODOS
                        );
                    }}
                >
                    View Archived Tasks
                </Button>
            </Link>
        ];
    }
}

export default connect(
    null,
    { setVisibilityFilter }
)(ControlPanel);
