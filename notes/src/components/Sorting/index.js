import React from "react";
import { connect } from "react-redux";

import { alpha, alphaReverse, sortById, search } from "../../actions";

import "./sorting.css";

class Sorting extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      csvData: ""
    };
  }
  inputHandler = e => {
    const search = e.target.value;
    this.setState({ searchTerm: search });

    return this.props.search(search);
  };

  convertCSVNotes = () => {
    let headers = Object.keys(this.props.notes[0]);
    let results = [];
    results.push(headers.join(","));
    this.props.notes.map(note => {
      const noteStr = Object.values(note);
      return results.push(noteStr.join(","));
    });
    results = results.join("\n");
    this.setState({ csvData: results });
    console.log(results);
    return this.exportCSV(results);
  };

  exportCSV = data => {
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "Lambda-Notes.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  render() {
    return (
      <section className="sorting-container">
        <section className="search">
          <p>Search</p>
          <input
            type="text"
            onChange={this.inputHandler}
            value={this.state.searchTerm}
          />
        </section>
        <section>
          <button onClick={this.convertCSVNotes}>Export Notes</button>
        </section>
        <section className="sorting">
          <p>Sort:</p>
          <select>
            <option />
            <option onClick={this.props.alpha}>A-Z</option>
            <option onClick={this.props.alphaReverse}>Z-A</option>
            <option onClick={this.props.sortById}>By Id</option>
          </select>
        </section>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return { notes: state.notesReducer.notes };
};

export default connect(
  mapStateToProps,
  { alpha, alphaReverse, sortById, search }
)(Sorting);
