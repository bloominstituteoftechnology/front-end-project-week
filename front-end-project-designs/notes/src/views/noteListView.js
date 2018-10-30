import React from "react";
import { connect } from "react-redux";

import FullView from "../components/fullView";
import {fetchNotes } from "../actions";


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
//   addSmurf = event => {
//     this.props.addSmurf(this.state.newSmurf);
//   };
  render() {
    if (this.props.fetchingNotes) {
      return <h1>Hold on, we're getting your notes</h1>;
    }
    return (
      <div>
        <FullView
          notes={this.props.notes}
          newNote={this.state.newNote}
          handleChanges={this.handleChanges}
        //   addSmurf={this.addSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    selected:state.selected,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { fetchNotes }
)(NoteListView);