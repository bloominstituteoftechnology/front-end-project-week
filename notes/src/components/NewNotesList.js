import React from "react";
import { MainContent, Search } from "../styled/NotesList";
import { connect } from "react-redux";
import { fetchNotes, filterNotes } from "../actions";
import SortableList from "./SortableList";
import { DragDropContext } from "react-beautiful-dnd";
import Papa from "papaparse";

const reorder = (notes, startIndex, endIndex) => {
  const result = Array.from(notes);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function newSort(server, local) {
  const result = [];
  let extra = [];
  let item;

  const uniqueToServer = server.filter(function(obj) {
    return !local.some(function(obj2) {
      return obj._id === obj2._id;
    });
  });
  let length = server.length > local.length ? local.length : server.length;

  for (let i = 0; i < length; i++) {
    let key;
    if (local[i]["_id"]) {
      key = local[i]["_id"];
    }
    for (let j = 0; j < length; j++) {
      if (server[j]["_id"] === key) {
        result.push(server[j]);
      }
    }
  }
  Array.prototype.push.apply(result, uniqueToServer);
  return result;
}

class NotesList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      search: ""
    };
  }
  componentDidMount() {
    this.props.fetchNotes(); //can't figure out how to get axios to persist
    if (localStorage.getItem("notes")) {
      let notes = JSON.parse(localStorage.getItem("notes"));
      let newNotes = this.props.notes;
      let sorted = newSort(newNotes, notes);
      console.log(sorted);
      this.setState({ notes: sorted });
    }
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    let notes = [...this.state.notes];
    let ids = notes.filter(obj =>
      Object.keys(obj).map(key => {
        if (key === "_id") return key;
        else {
          delete obj[key];
          return null;
        }
      })
    );
    console.log(ids);
    localStorage.setItem("notes", JSON.stringify(ids));
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.filterNotes(e.target.value);
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
  };

  downloadCSV = args => {
    var data, filename, link;

    var csv = Papa.unparse([...this.props.notes]);
    if (csv == null) return;

    filename = args.filename || "export.csv";

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
    // const notes =
    //   this.props.filtered.length > 0 ? this.props.filtered : this.props.notes;
    // SEARCH NOT WORKING IN THIS VERSION BECAUSE DnD issues
    const { notes } = this.state;
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
