import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// action
import { setVisibilityFilter } from "../actions/index";
// filter types
import { VisibilityFilters } from "../actions/index.js";
// material components
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
// styles
import "../styles/SearchBar.css";

const styles = theme => ({
    input: {
        fontSize: "1.5rem",
        width: "100%"
    }
});

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        };
    }
    // save input text to state
    handleNewInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    // filter todos by searchText
    // handleSubmit = event => {}

    render() {
        const { classes } = this.props;

        return (
            <Paper className="SearchBar" zdepth={2}>
                <i className="material-icons md-24 SearchBar__Icon">search</i>
                <form
                    className="SearchBar_Form"
                    onSubmit={event => {
                        event.preventDefault();
                        this.props.filterPostsList(this.state.searchText);
                    }}
                >
                    <Input
                        name="searchText"
                        placeholder="Search Your Notes Here..."
                        onChange={this.handleNewInput}
                        disableUnderline={true}
                        className={classes.input}
                    />
                </form>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
    return {
        setVisibilityFilter
    };
};

export default connect(mapStateToProps)(withStyles(styles)(SearchBar));
