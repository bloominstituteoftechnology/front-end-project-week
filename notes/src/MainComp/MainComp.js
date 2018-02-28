import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './MainComp.css';

class MainComp extends Component {
  render() {
    return (
      <div className="view">
        <div className="view--header">Your Notes:</div>
        <div className="view--notes">
          {this.props.notes.map((note, idx) => {
            return (
              <Link to={`/notes/${note.id}`} key={idx}>
                <div className="note-box">
                  <div className="note-box__title">{note.title}</div>
                  <div className="note-box__body">{note.body}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(MainComp);
