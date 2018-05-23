import React, { Component } from 'react';
import Title from '../Title';
import SimpleLink from '../SimpleLink';
import ModalLink from '../ModalLink';
import history from '../Routes/history';
import { connect } from 'react-redux';
import { getNote } from '../../actions';

class NoteDetails extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.getNote(this.props.noteId);
  }
  deleteNote = () => {
    // axios.delete(`http://localhost:5000/notes/${this.props.noteId}`)
    //   .then(response => history.push('/'))
    //   .catch(error => console.error(error));
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
          {this.props.contents}
        </div>
      </div>
     )
  }
};

const mapStateToProp = state => {
  return {
    id: state.activeNote.id,
    title: state.activeNote.title,
    contents: state.activeNote.contents
  }
};
 
export default connect(mapStateToProp, { getNote })(NoteDetails);