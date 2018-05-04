import React, { Component } from 'react';
import notestyles from './notestyles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Note from './Note';

import loadNotes from '../actions/GetActions';

class NotesPage extends Component {
  render() {
    console.log(this.props.notes);
    return (
      <div className="notepage">
        <h3>Your Notes:</h3>
        {this.props.notes.map((note, i) => {
          <Note
            title={this.props.title}
            content={this.props.content}
            key={i}
          />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

// export default NotesPage;

export default connect(mapStateToProps, loadNotes)(NotesPage);
