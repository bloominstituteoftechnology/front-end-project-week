import React, { Component } from "react";

// material components
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// styles
import "../styles/SearchBar.css";

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

    render() {
        return (
            <Paper className="SearchBar" zDepth={2}>
                <i class="material-icons md-24 SearchBar__Icon">search</i>
                <form
                    className="SearchBar__Input"
                    onSubmit={event => {
                        event.preventDefault();
                        this.props.filterPostsList(this.state.searchText);
                    }}
                >
                    <TextField
                        hintText="Search here..."
                        underlineStyle={{ display: "none" }}
                    >
                        <input
                            name="searchText"
                            value={this.state.searchText}
                            onChange={event => {
                                this.handleNewInput(event);
                            }}
                        />
                    </TextField>
                </form>
            </Paper>
        );
    }
}

export default SearchBar;
