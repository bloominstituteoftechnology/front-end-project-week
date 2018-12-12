import React, { Component } from "react";
import "./style/App.css";
import axios from "axios";
import ListViewHolder from "../components/ListView/listViewHolder";
import { AddNote } from "../components/AddNote/addNote";
import { Route } from "react-router-dom";
import SingleNoteHolder from "../components/SingleNote/singleNoteHolder";
import EditNoteHolder from "../components/EditNote/editNoteHolder";

class App extends Component {
  state = {
    notes: [],
    filteredNotes: []
  };

  componentDidMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  searchPostsHandler = e => {
    const filtered = this.state.notes.filter(note =>
      note.title.includes(e.target.value)
    );
    this.setState(
      {
        filteredNotes: filtered
      },
      () => console.log("filtered notes are" + this.state.filteredNotes)
    );
  };
  // getCSV(props){
  //   let csvRow = [];
  //   let rowTitles = [["title", "textBody"]];
  //   console.log(props);
  //   let noteData = props.notes;

  //   for (let i = 0; i < noteData.length; i++) {
  //     rowTitles.push([i, noteData[i].title, rowTitles, noteData[i].textBody]);
  //   }
  //   for (let i = 0; i < rowTitles.length; i++) {
  //     csvRow.push(rowTitles[i].join(","));
  //   }
  //   let csvString = csvRow.join("%0rowTitles");
  //   var a = document.createElement("a");
  //   a.href = "data:attachment/csv," + csvString;
  //   a.target = "_Blank";
  //   a.download = "testfile.csvString";
  //   document.body.appendChild(a);
  //   a.click();
  // }

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <ListViewHolder
              {...props}
              notes={
                this.state.filteredNotes.length > 0
                  ? this.state.filteredNotes
                  : this.state.notes
              }
              searchPostsHandler={this.searchPostsHandler}
            
            />
          )}
        />
        <Route path="/addnote" render={props => <AddNote {...props} />} />
        <Route
          path="/notes/:id"
          render={props => (
            <SingleNoteHolder {...props} notes={this.state.notes} />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditNoteHolder {...props} notes={this.state.notes} />
          )}
        />
      </div>
    );
  }
}

export default App;
