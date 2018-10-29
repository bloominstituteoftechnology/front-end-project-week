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
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
}

const mapStateToProps = ({ notes, loading }) => {
  return {
    notes,
    loading
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(ListView);
