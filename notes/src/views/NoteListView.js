import React from "react";
import { connect } from "react-redux";

import NoteList from "../components/NoteList";

import { fetchNotes } from '../actions';

class NoteListView extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.fetchNotes();
    console.log(this.props)
  }

  render(){
    return(
      <div>
        {this.props.isFetching ? <h2> Loading Notes ... </h2> : <h1> Your Notes: </h1>}
        <NoteList notes={this.props.notes} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.notes)
  return{
    notes: state.notes,
    isFetching: state.fetching
  }
}

export default connect(
  mapStateToProps, { fetchNotes }
)(NoteListView);
