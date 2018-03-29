import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './NoteView.css';

class NoteView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.number,
      noteTitle: this.props.noteData.notes[this.props.match.params.number].title,
      noteBody: this.props.noteData.notes[this.props.match.params.number].body,
    }
  }

  triggerModal = () => {
    const modal = document.getElementsByClassName('modalContainer')[0];
    modal.style.display = 'block';
  }

  render() {
    // const id = this.props.match.params.number;
    // const noteTitle = this.props.noteData.notes[id].title;
    // const noteBody = this.props.noteData.notes[id].body;
    return (
      <div className="noteViewContainer">
        <div className="linkContainer">
          <p className="link" onClick={() => { this.props.history.push(`/edit/${this.state.id}`) }}>edit</p>
          <p className="link" onClick={() => { this.triggerModal() }}>delete</p>
        </div>
        <h2 className="noteViewHeader">{this.state.noteTitle}</h2>
        <p className="noteViewBody">{this.state.noteBody}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  noteData: state,
});

export default connect(mapStateToProps)(withRouter(NoteView));
