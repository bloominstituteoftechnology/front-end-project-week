import React from 'react';
import { connect } from 'react-redux';
import { NotesList } from '../components/NotesList/NotesList';
import { fetchNotes } from '../store/actions';

class NoteListView extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <NotesList {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  notesList: state.notes
})

export default connect(mapStateToProps, { fetchNotes })(NoteListView);