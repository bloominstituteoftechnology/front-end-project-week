import React, { Component } from "react";

import { connect } from "react-redux";

import { searchList } from "../actions";

import { SearchBar } from "../styles";

class Search extends Component {
  handleChange = e => this.props.searchList(e.target.value);

  render() {
    return (
      <SearchBar
        type="text"
        name="searchText"
        onChange={this.handleChange}
        value={this.props.criteria}
        placeholder="Search"
      />
    );
  }
}

const mapStateToProps = state => ({
  criteria: state.criteria
});

export default connect(
  mapStateToProps,
  { searchList }
)(Search);
