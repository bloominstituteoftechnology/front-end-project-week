import React from "react";
import { MainContent, Search } from "../styled/NotesList";
import { connect } from "react-redux";
import { fetchNotes, filterNotes, newSort, isEqual, reorder } from "../actions";
import SortableList from "./SortableList";
import { DragDropContext } from "react-beautiful-dnd";
import Papa from "papaparse";
import Fuse from "fuse.js";

class NotesList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      search: "",
      filtered: []
    };
  }
  componentWillMount() {
    this.setState({ notes: JSON.parse(localStorage.getItem("state")) });
    this.props.fetchNotes();
    if (!isEqual([...this.props.notes], [...this.state.notes])) {
      const notes = JSON.parse(localStorage.getItem("state"));
      const newNotes = this.props.notes;
      const sorted = newSort(newNotes, notes);
      this.setState({ notes: sorted });
    }
  }
  componentDidMount() {
    window.addEventListener("beforeunload", this.saveNotes);
    this.props.fetchNotes();
    // if (!isEqual([...this.props.notes], [...this.state.notes])) {
    //   const notes = [...this.state.notes];
    //   const newNotes = this.props.notes;
    //   const sorted = newSort(newNotes, notes);
    //   this.setState({ notes: sorted });
    // }
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveNotes);
    if (this.state.notes.length > 0) {
      this.saveNotes();
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    const options = {
      threshold: 0.5,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 0,
      keys: ["title", "textBody"]
    };
    const fuse = new Fuse(this.state.notes, options);
    const result = fuse.search(e.target.value);
    this.setState({ filtered: result });
  };

  saveNotes = () => {
    const notes = JSON.stringify(this.state.notes);
    localStorage.setItem("state", notes);
  };

  onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const notes = reorder(
      this.state.notes,
      result.source.index,
      result.destination.index
    );
    this.setState({
      notes
    });
    this.saveNotes();
  };

  downloadCSV = args => {
    var data, filename, link;
    filename = args.filename || "export.csv";
    var csv = Papa.unparse([...this.props.notes]);
    if (csv == null) return;

    if (!csv.match(/^data:text\/csv/i)) {
      csv = "data:text/csv;charset=utf-8," + csv;
    }
    data = encodeURI(csv);

    link = document.createElement("a");
    link.setAttribute("href", data);
    link.setAttribute("download", filename);
    link.click();
  };

  render() {
    const notes =
      this.state.filtered.length > 0 ? this.state.filtered : this.state.notes;

    return (
      <MainContent>
        <h2>Your Notes:</h2>
        <Search>
          <input
            type="text"
            name="search"
            value={this.state.search}
            placeholder="&#x1F50D; Search by title"
            onChange={this.handleChange}
          />
          <button
            onClick={() => this.downloadCSV({ filename: "notes_list.csv" })}
          >
            CSV Download
          </button>
        </Search>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <SortableList notes={notes} history={this.props.history} />
        </DragDropContext>
      </MainContent>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    filtered: state.filtered,
    fetchingNotes: state.fetchingNotes,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes, filterNotes }
)(NotesList);
