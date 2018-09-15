import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Note from '../components/Note';
import { getNote, deleteNote } from '../actions';
import Modal from '../components/Modal';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Loading from '../components/Loading';

const PageWrapper = styled(Wrapper)`
  margin-top: 9px;
`;
const StyledLink = styled.div`
  text-decoration: underline;
  padding: 8px;
  color: #414141;
  font-size: 11px;
  cursor: pointer;
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

class NoteContainer extends React.Component {
  state = {
    showingModal: false,
  };
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (this.props.noteDeleted) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <PageWrapper>
        {this.props.isFetching ? (
          <Loading />
        ) : this.props.noteDeleted ? (
          <p> note deleted! </p>
        ) : (
          <Fragment>
            <LinkWrapper>
              <Link to={`/edit/${this.props.match.params.id}`}>
                <StyledLink>edit</StyledLink>
              </Link>
              <StyledLink onClick={() => this.setState({ showingModal: true })}>
                {' '}
                delete{' '}
              </StyledLink>
            </LinkWrapper>
            <Note note={this.props.note} />
            <Modal
              show={this.state.showingModal}
              handleClose={() => this.setState({ showingModal: false })}
              handleDelete={() =>
                this.props.deleteNote(this.props.match.params.id)
              }
              deleteNote={this.props.deletingNote}
            />
          </Fragment>
        )}
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  note: state.notesReducer.currentNote,
  isFetching: state.notesReducer.fetchingNote,
  deletingNote: state.notesReducer.deletingNote,
  noteDeleted: state.notesReducer.noteDeleted,
});

export default connect(
  mapStateToProps,
  { getNote, deleteNote },
)(NoteContainer);
