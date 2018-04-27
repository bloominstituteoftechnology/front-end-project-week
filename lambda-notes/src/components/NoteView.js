import React, { Component } from 'react';
import { getNote, deleteNote } from '../actions';
import { connect } from 'react-redux';
import './NoteView.css';
import { Link } from 'react-router-dom';

class NoteView extends Component {
    
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getNote(id);
  }

  render() {
      console.log(this.props)
      return (
        <div className="noteView">
            <div className="buttons">
                <Link to='/'><button className="deleteButton" 
                    onClick={() => {
                    this.props.deleteNote(this.props.note.id)}}>delete</button></Link>
            </div>
            <div className="oneTitle">{this.props.note.title}</div>
            <div className="oneContent">{this.props.note.content}</div>
        </div>
      )
  }
}

const mapStateToProps = state => {
    return {
      note: state.note,
      fetchNote: state.fetchNote,
      error: state.error,
      deletingNote: state.deletingNote
    };
  };
  
  export default connect(mapStateToProps, { getNote, deleteNote })(NoteView);
  