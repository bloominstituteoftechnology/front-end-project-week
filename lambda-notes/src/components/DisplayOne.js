import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/DisplayOne.css';
import SideBar from './SideBar';
import { editNote, deleteNote } from '../actions';

class DisplayOne extends Component {
  state = {
    note: {},
    title: '',
    body: '',
    edited: false,
    deleted: false,
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const singleNote = this.props.notes.filter(note => note.id === id)[0];
    this.setState({ note: singleNote });
  }

editNote = e => {
  e.preventDefault();
  const editNote = {
    title: this.state.title,
    body: this.state.body,
  };

  this.props.editNote(editNote, this.setState.note.id);

  this.setState({
    title: '',
    body: '',
    edited: !this.state.edited,
  });
};

toggleDelete = () => {
  this.setState({ deleted: !this.state.deleted });
  this.props.deleteNote(this.state.note);
  this.props.history.push('/');
};


  render() { 

    return (
      <div className="container">
        <SideBar />
        <div className="notes-container">
          <div className="links-parent-container">
            <div className="links-container">
              <div className="edit-delete">edit</div>
              <div 
              className="edit-delete"
              onClick={this.toggleDelete}
              >
              delete
              </div>
            </div>
          </div>
          <div className="note-title">{this.state.note.title}</div>
          <div className="note-body">{this.state.note.body}</div>
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
  
export default connect(mapStateToProps, { editNote, deleteNote })(DisplayOne);