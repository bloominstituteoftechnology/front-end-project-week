import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import NoteList from '../components/NoteList';
import Wrapper from '../components/Wrapper';
import Loading from '../components/Loading';

class NoteListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <Wrapper>
        {this.props.fetchingNotes ? (
          <Loading />
        ) : (
          <Fragment>
            <h4>Your Notes:</h4>
            <NoteList notes={this.props.notes} />
          </Fragment>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notesReducer.notes,
  fetchingNotes: state.notesReducer.fetchingNotes,
});

export default connect(
  mapStateToProps,
  { fetchNotes },
)(NoteListContainer);
