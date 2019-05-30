import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import { Link } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';

class Notes extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  displayList() {
    const fetching = this.props.fetchingData;
    console.log('fetching', fetching);
    if (fetching) {
      return (
        <div className= "spinner">
          <MDSpinner size={150}  />
        </div>
      );
    } else {
      return (
        <div className="noteDisplay">
          {this.props.notes.map(note => {
            return (
              <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none' }}>
                <div className="notesDisplay" key={note.id}>
                  <h2>{note.title}</h2>
                  <p>{note.content}</p>
                </div>
              </Link>
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="listDisplay">
        <h1>Your notes:</h1>
        {this.displayList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingData: state.fetchingData
  };
};

export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(Notes);
