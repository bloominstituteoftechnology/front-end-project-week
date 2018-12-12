import React, { Component } from 'react';
import {withRouter} from 'react-router';
import { editNote, overlayToggle, setNote, fetchNotes } from '../actions';
import { connect } from 'react-redux';
import DisplayNote from './DisplayNote';
import { Route } from 'react-router-dom';
import EditContent from './Edit';
import './NoteDisplay.css';
import axios from 'axios';

class Note extends Component {
    constructor(props) {
      super(props);
      this.state = {
          note: {
            Title: '',
            Content: '',
          },
      }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios
        .get(`https://notes-bryangf.herokuapp.com/api/notes/${id}`)
        .then(response => 
            this.setState({note: response.data[0]}))
        .catch(error => console.log(error));
        this.props.setNote(id);
    }

    changeHandler = (ev) => {
        this.setState({
            note: {
                ...this.state.note,
                [ev.target.name]: ev.target.value
            }
        })
    }

    editingNote = (ev) => {
        this.props.editNote(this.state.note.id, this.state.note).then(() => this.props.fetchNotes());
    }

    togglingOverlay = (ev) => {
        ev.preventDefault();
        this.props.overlayToggle();
    }

    render() {
        console.log(this.state.note)
      return (
        <div className="Note">
           <Route exact path='/notes/:id' render ={(props) => (
                 <DisplayNote {...props} overlayToggle={this.togglingOverlay} note={this.state.note}/>
            )}/>
            <Route exact path='/notes/edit/:id' render ={(props) => (
                 <EditContent {...props} editingNote={this.editingNote} changeHandler={this.changeHandler} note={this.state.note}/>
            )}/>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
        fetchingNotes: state.notesReducer.fetchingNotes,
        postingNote: state.notesReducer.postingNote,
        editingNote: state.notesReducer.editingNote,
        settingNote: state.notesReducer.settingNote,
        notes: state.notesReducer.notes,
        note: state.notesReducer.note,
        error: state.notesReducer.erorr,
        overlay: state.notesReducer.overlay,
        deletingNote: state.notesReducer.deletingNote
    };
  };
  
  export default withRouter(connect(
    mapStateToProps,
    { editNote, overlayToggle, setNote, fetchNotes }, 
  )(Note));
  