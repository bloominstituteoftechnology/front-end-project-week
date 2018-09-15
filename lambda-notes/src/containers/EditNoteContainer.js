import React, { Fragment } from 'react';
import NoteForm from '../components/NoteForm';
import { connect } from 'react-redux';
import { getNote, editNote } from '../actions';
import Wrapper from '../components/Wrapper';
import Loading from '../components/Loading';

class EditNoteContainer extends React.Component {
  state = {
    title: '',
    content: '',
  };

  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
    this.setState({
      title: this.props.note.title,
      content: this.props.note.content,
    });
  }

  componentDidUpdate() {
    if (this.props.noteEditSuccess) {
      this.props.history.push(`/note/${this.props.match.params.id}`);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title && this.state.content) {
      this.props.editNote(this.props.note.id, this.state);
    }
  };

  render() {
    return (
      <Wrapper>
        {this.props.note && (
          <Fragment>
            <h4>Edit Note:</h4>
            <NoteForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              title={this.state.title}
              content={this.state.content}
              loading={this.props.edittingNote}
            />
          </Fragment>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  note: state.notesReducer.currentNote,
  isFetching: state.notesReducer.fetchingNote,
  edittingNote: state.notesReducer.edittingNote,
  noteEditSuccess: state.notesReducer.noteEditSuccess,
});

export default connect(
  mapStateToProps,
  { getNote, editNote },
)(EditNoteContainer);
