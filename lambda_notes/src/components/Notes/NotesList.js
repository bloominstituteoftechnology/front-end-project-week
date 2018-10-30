import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';

class NotesList extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div>
        {this.props.notes.map(note => (
          <Link to={`/${note._id}`} key={note._id}>
            <p>{note.title}</p>
          </Link>
        ))}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes })(NotesList);
