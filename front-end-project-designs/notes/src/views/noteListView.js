import React from "react";
import { connect } from "react-redux";

import FullView from "../components/fullView";
import { fetchNotes, addNote, deleteNote, fecthSingle } from "../actions";
import { Route } from "react-router-dom";
import SingleView from "../components/singleNoteView";
class NoteListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: {
        tag: [],
        title: "",
        textBody: ""
      }
    };
  }
  componentDidMount() {
    console.log("hhhh");
    this.props.fetchNotes();
  }
  handleChanges = event => {
    this.setState({
      newNote: {
        ...this.state.newNote,
        [event.target.name]: event.target.value
      }
    });
  };
  addNewNote = event => {
    this.props.addNote(this.state.newNote);
  };
  handleDelete = id => {
    this.props.deleteNote(id);
  };
  handleFetchSingle = id => {
    this.props.singleNote(id);
  };
  render() {
    console.log("render here");
    if (this.props.fetchingNotes) {
      return <h1>Hold on, we're getting your notes</h1>;
    }
    // return (
    //     this.props.notes.map((note)=>{
    //         return(
    //             <NoteView note={note}/>
    //         )
    //     })
    // );
    return (
      // <Route
      //   exact
      //   path="/"
      //   render={(props) => {
      //     <FullView
      //       notes={this.props.notes}
      //       handleChanges={this.handleChanges}
      //       addNewNote={this.addNewNote}
      //       handleDelete={this.handleDelete}
      //     />;
      //   }}
      // />
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <FullView
              notes={this.props.notes}
              handleChanges={this.handleChanges}
              addNewNote={this.addNewNote}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route path="/note/id" render={props => <SingleView />} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("map state here" + state);
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    selected: state.selected,
    error: state.error,
    singleNote: state.singleNote
  };
};
export default connect(
  mapStateToProps,
  { fetchNotes, addNote, deleteNote, fecthSingle }
)(NoteListView);
