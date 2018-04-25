import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/DisplayOne.css';
import SideBar from './SideBar';
import { editNote } from '../actions';
import EditNote from './EditNote';

class DisplayOne extends Component {
  state = {
    note: {},
    title: '',
    body: '',
    edited: false,
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const singleNote = this.props.notes.filter(note => note.id === id)[0];
    this.setState({ note: singleNote });
  }
  


  toggleEdit = () => {
    this.setState({ edited: !this.state.edited });
  };

  render() { 

    return (
      <div>
        {this.state.edited ? (
          <EditNote
            editNote={this.editNote}
            id={this.state.note.id}
            history={this.props.history}
          />
        ) : (
          <div className="container">
            <SideBar />
            <div className="notes-container">
              <div className="links-parent-container">
                <div className="links-container">
                  <div className="edit-delete"
                  onClick={this.toggleEdit}
                  >
                  edit
                  </div>

                </div>
              </div>
              <div className="note-title">{this.state.note.title}</div>
              <div className="note-body">{this.state.note.body}</div>
            </div>
          </div> 
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes, 
  };
};
  
export default connect(mapStateToProps, { editNote })(DisplayOne);