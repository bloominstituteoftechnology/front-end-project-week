import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getNote, deleteNote } from '../store/actions';
import NoteDetails from '../components/NoteDetails';
import DeleteModel from '../components/DeleteModel';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivPageWrapper = styled.div`
  width: 85%;
  margin-left: 250px;
`;

const H2LoadingMessage = styled.h2`
  margin: 85px 0 0 0;
`;

const DivNotePageDisplay = styled.div``;

const HeaderNote = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const NavNoteLinks = styled.nav`
  margin: 20px;
`;

const LinkEdit = styled(Link)`
  pointer-events: ${props => props.showdeletemodel === 'true' && 'none'};
`;

const ButtonLink = styled.button`
  border: none;
  background-color: inherit;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  text-decoration: none;
  color: black;
  user-select: none;
  outline: none;

  &:not(:first-child) {
    margin-left: 40px;
  }

  &:hover {
    text-decoration: ${props =>
      props.showdeletemodel === 'false' && 'underline'};
    cursor: ${props => props.showdeletemodel === 'false' && 'pointer'};

    /* Edit Note Button */
    color: ${props =>
      props.edit && props.showdeletemodel === 'false' && 'rgb(43, 193, 196)'};

    /* Delete Note Button */
    color: ${props =>
      props.remove && props.showdeletemodel === 'false' && 'red'};
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModel: false,
      NoteNavItems: {
        edit: 'edit',
        delete: 'remove'
      }
    };
  }

  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deletingNote !== this.props.deletingNote) {
      if (!this.props.deletingNote) {
        this.props.history.push(this.props.viewNotesLink);
      }
    }
  }

  showDeleteModel = e => {
    e.preventDefault();
    this.setState({ showDeleteModel: true });
    this.props.setModelIsRaised();
  };

  hideDeleteModel = e => {
    e.preventDefault();
    this.setState({ showDeleteModel: false });
    this.props.setModelNotRaised();
  };

  deleteNoteAndHideModel = (e, noteId) => {
    e.preventDefault();
    this.hideDeleteModel(e);
    this.props.deleteNote(noteId);
  };

  render() {
    return (
      <DivPageWrapper>
        {this.props.fetchingNote ? (
          <H2LoadingMessage>Loading Note...</H2LoadingMessage>
        ) : (
          <div>
            <DeleteModel
              noteId={this.props.match.params.id}
              deleteNoteAndHideModel={this.deleteNoteAndHideModel}
              hideDeleteModel={this.hideDeleteModel}
              visible={this.state.showDeleteModel.toString()}
            />
            <DivNotePageDisplay
              showdeletemodel={this.state.showDeleteModel.toString()}
            >
              <HeaderNote>
                <NavNoteLinks>
                  <LinkEdit
                    to={`${this.props.editNoteLink}/${this.props.note._id}`}
                    showdeletemodel={this.state.showDeleteModel.toString()}
                  >
                    <ButtonLink
                      edit={this.state.NoteNavItems.edit}
                      showdeletemodel={this.state.showDeleteModel.toString()}
                    >
                      {this.state.NoteNavItems.edit}
                    </ButtonLink>
                  </LinkEdit>
                  <ButtonLink
                    remove={this.state.NoteNavItems.delete}
                    showdeletemodel={this.state.showDeleteModel.toString()}
                    onClick={e => this.showDeleteModel(e)}
                  >
                    {this.state.NoteNavItems.delete}
                  </ButtonLink>
                </NavNoteLinks>
              </HeaderNote>
              <NoteDetails
                title={this.props.note.title}
                textBody={this.props.note.textBody}
                showDeleteModel={this.state.showDeleteModel.toString()}
              />
            </DivNotePageDisplay>
          </div>
        )}
      </DivPageWrapper>
    );
  }
}

NoteView.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  fetchingNote: PropTypes.bool,
  deletingNote: PropTypes.bool,
  getNote: PropTypes.func,
  deleteNote: PropTypes.func,
  viewNotesLink: PropTypes.string,
  note: PropTypes.shape({
    tags: PropTypes.array,
    _id: PropTypes.string,
    title: PropTypes.string,
    textBody: PropTypes.string,
    __v: PropTypes.number
  })
};

const mapStateToProps = state => {
  return {
    note: state.note,
    fetchingNote: state.fetchingNote,
    deletingNote: state.deletingNote,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNote, deleteNote }
)(NoteView);
