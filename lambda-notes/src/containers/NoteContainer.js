import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Note from "../components/Note";
import { getNote, deleteNote } from "../actions";
import { StyledContainer } from '../styled-components/container-styles';
import Modal from '../components/Modal';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`
const StyledLink = styled.div`
  text-decoration: underline;
  padding: 5px;
  font-weight: bold;
  color: #414141;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

class NoteContainer extends React.Component {
  state = {
    showingModal: false
  }
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (this.props.noteDeleted) {
      this.props.history.push('/');
    }
  }

  showModal = () => {
    this.setState({ showingModal: true })
  }

  hideModal = () => {
    this.setState({ showingModal: false })
  }

  render() {
    return (
      <StyledContainer>
        {this.props.isFetching ? (
          <p> gettin dat note </p>
        ) : this.props.noteDeleted ?
          (<p> note deleted! </p> ) : (
          <Fragment>
          <LinkWrapper>
            <Link to={`/edit/${this.props.match.params.id}`}>
              <StyledLink>edit</StyledLink>
            </Link>   
            <StyledLink onClick={this.showModal}> delete </StyledLink>
          </LinkWrapper>
          <StyledModal show={this.state.showingModal} handleClose={this.hideModal} handleDelete={() => this.props.deleteNote(this.props.match.params.id)} deleteNote={this.props.deletingNote} />
          <Note note={this.props.note} />
          </Fragment>
        )}
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => ({
  note: state.notesReducer.currentNote,
  isFetching: state.notesReducer.fetchingNote,
  deletingNote: state.notesReducer.deletingNote,
  noteDeleted: state.notesReducer.noteDeleted
});

export default connect(
  mapStateToProps,
  { getNote, deleteNote }
)(NoteContainer);
