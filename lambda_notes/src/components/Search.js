
import React, { Component } from 'react';
class Search extends Component {


handleChange(event) {
    let notesToSearch = [];
    let newSearch = [];


    if (event.target.value !== "") {
      notesToSearch = this.props.notes;

      newSearch = notesToSearch.filter(notes => {
        const lc = notes.toLowerCase();
        const filter = event.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newSearch = this.props.notes;
    }
    this.setState({
      filtered: newSearch
    });
  }

    render() {
        return (
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <input
              style={{
                width: "500px",
                marginBottom: "10px",
                fontSize: "1rem",
                padding: "10px"
              }}
              type="text"
              id=""
              name="search"
              placeholder="Search"
              onChange={event => (this.props.notes)}
            />
            <button
              style={{
                backgroundColor: "white",
                marginLeft: "15px",
                cursor: "pointer"
              }}
            >
              search
            </button>
          </div>
        );
    }
}

export default Search;

