import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/DisplayOne.css';
import SideBar from './SideBar';

class DisplayOne extends Component {
  state = {
    note: {},
    title: '',
    body: '',
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const singleNote = this.props.notes.filter(note => note.id === id)[0];
    this.setState({ note: singleNote });
  }

  render() { 

    return (
      <div className="container">
        <SideBar />
        <div className="notes-container">
          <div className="links-parent-container">
            <div className="links-container">
              <div className="edit-delete">edit</div>
              <div className="edit-delete">delete</div>
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
  
export default connect(mapStateToProps, null)(DisplayOne);