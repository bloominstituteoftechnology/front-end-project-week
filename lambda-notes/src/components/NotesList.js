import React, { Component } from 'react';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import './NotesList.css';

class NotesList extends Component {
  state = {
    title: '',
    content: ''
  };

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
         
        <div className="mainList"><h3 className="headerNotes">Your Notes:</h3>
          {this.props.notes.map(note => <div key={note.id} className="noteList">
                                              
                                              <div className="noteTitle">{note.title}</div>
                                              <div className="divide"></div>
                                              <div className="noteText">
                                                <div className="noteContent">{note.content}</div>
                                                {/* <button className="button" 
                                                  onClick={() => {
                                                    this.props.removeSmurf(smurf.id);}}>Delete</button> */}
                                              
                                              </div>
                                            </div>)}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    error: state.error
  };
};

export default connect(mapStateToProps, { getNotes })(NotesList);
