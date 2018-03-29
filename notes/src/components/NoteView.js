import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './NoteView.css';

class NoteView extends Component {

  triggerModal = () => {
    const modal = document.getElementsByClassName('modalContainer')[0];
    modal.style.display = 'block';
  }

  render() {
    const id = this.props.match.params.number;
    const noteTitle = this.props.noteData.notes[id].title;
    const noteBody = this.props.noteData.notes[id].body;
    return (
      <div className="noteViewContainer">
        <div className="linkContainer">
          <p className="link" onClick={() => { this.props.history.push(`/edit/${id}`) }}>edit</p>
          <p className="link" onClick={() => { this.triggerModal() }}>delete</p>
        </div>
        <h2 className="noteViewHeader">{noteTitle}</h2>
        <p className="noteViewBody">{noteBody}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  noteData: state,
});

export default connect(mapStateToProps)(withRouter(NoteView));
