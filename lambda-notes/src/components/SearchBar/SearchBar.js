import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      placeholder: [
        "Search for a note",
        "Find a specific note",
        "Look for the note"
      ],
      value: "Search for a note"
    };
  }

  placeholderAnimation(e) {
    e.preventDefault();

    this.setState({ ...this.state, value: this.state.placeholder[2] });
  }

  handleInput = e => {
    console.log(e.target.value);
    this.props.handleSearch(e.target.value);
  };

  render() {
    return (
      <div className="search-container">
        <div className="input-wrapper">
          <div className="display-text" />
          <input
            type="text"
            onChange={e => this.handleInput(e)}
            className="search"
            placeholder="Search for a note"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
