import React from "react";
import SearchBar from "../components/SearchBar";

import { connect } from "react-redux";

class SearchBarView extends React.Component {
  handleChange = event => {
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value
      }
    });
  };

  searchNotes = e => {
    e.preventDefault();
    let newNotes = [...this.state.notes];
    newNotes = newNotes.filter(note => {
      return note.username === this.state.searchPosts;
    });
    this.setState({ notes: newNotes });
  };

  render() {
    return <SearchBar {...this.props} />;
  }
}

// const mapStateToProps = state => {
//   return {
//     notesList: state.notes,
//     fetchingNotes: state.fetchingNotes
//   };
// };

// export default connect(
//   mapStateToProps,
//   { searchNotes }
// )(SearchBarView);

export default SearchBarView;
