import React from "react";
import { connect } from "react-redux";

import { fetchNotes } from "../actions/index";
import NoteCard from './NoteCard';

class NoteList extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
    <div>
      {console.log(this.props)}
      {this.props.notes.map(item => {
        return <NoteCard key={item._id} note={item} />
      })}
    </div>
    )}
}

const mapStateToProps = state => {
  return { notes: state.notes };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NoteList);
