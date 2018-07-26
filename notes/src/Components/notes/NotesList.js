import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions';
import ListedNote from './ListedNote';
import PropTypes from 'prop-types';
import './Notes.css';

class NotesList extends Component {
    static propTypes = {
        notes: PropTypes.object.isRequired
      };
      componentDidMount() {
        this.props.fetchNotes();
      }
      componentDidUpdate(prevProps) {
        if (prevProps.notes.note !== this.props.notes.note) {
          this.props.fetchNotes();
        }
      }
      render() {
        const { notes } = this.props.notes;
        return (
        <div>
        <h1 className="notes-title">Your Notes:</h1>
        <div className="notes-container">
        {notes.map(note => <ListedNote {...note} key={note._id} />)}
              </div>
              </div>
        );
      }
    }

    const mapStateToProps = state => ({
      notes: state
    });

    export default connect(mapStateToProps, actions)(NotesList);