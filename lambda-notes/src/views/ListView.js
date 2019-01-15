// React imports
import React, { Component } from 'react';
// CSS import
import '../views/ListView.css';
// Component imports
import NotesList from '../components/NotesList';
// Redux imports
import { connect } from 'react-redux';
// Action imports
import { fetchNotes } from '../actions';
// Loader import
import Loader from 'react-loader-spinner';
class ListView extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  search = searchTerm => {
    const searchedNotes = this.props.notes.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return searchedNotes;
  };

  render() {
    if (this.props.loading) {
      return (
        <div className="loader">
          <Loader
            type="Triangle"
            color="#00BFFF"
            height="100"
            width="100"
            className="triangleLoader"
          />
        </div>
      );
    }
    return (
      <div className="listView">
        <NotesList
          notes={this.search(this.props.searchTerm)}
          sortNotes={this.props.sortNotes}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ notes, loading, searchTerm }) => {
  return {
    notes,
    loading,
    searchTerm
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(ListView);
