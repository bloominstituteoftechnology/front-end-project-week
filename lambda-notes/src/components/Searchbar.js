import React from "react";
import { connect } from "react-redux";

class Searchbar extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.handleChange}
        placeholder="Search..."
        type="text"
        value={this.props.searchText}
        name="searchText"
      />
    );
  }
}

export default connect(
  null,
  {}
)(Searchbar);
