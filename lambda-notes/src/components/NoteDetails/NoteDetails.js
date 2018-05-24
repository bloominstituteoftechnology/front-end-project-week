import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Title from '../Title';
import SimpleLink from '../SimpleLink';
import ModalLink from '../ModalLink';
import { connect } from 'react-redux';
import { getNote, deleteNote } from '../../actions';

class NoteDetails extends Component {
  componentDidMount(){
    this.props.getNote(this.props.noteId);
  }
  deleteNote = () => {
    this.props.deleteNote(this.props.noteId);
  }
  render() {
    return ( 
      <div className="note-details">
        <div className="note-actions">
          <SimpleLink title="edit" link={`/edit/${this.props.noteId}`} />
          <ModalLink
            title="delete"
            modalBody="Are you sure you want to delete this?"
            primaryAction={this.deleteNote}
            primaryActionTitle="Delete"
            secondaryActionTitle="No"
          />
        </div>
        <Title title={this.props.title} />
        <div className="note-contents">
          <ReactMarkdown
            className="result"
            source={this.props.contents}
            escapeHtml={true}
          />
        </div>
      </div>
     )
  }
};

const mapStateToProp = state => {
  return {
    title: state.activeNote.title,
    contents: state.activeNote.contents
  }
};
 
export default connect(mapStateToProp, { getNote, deleteNote })(NoteDetails);