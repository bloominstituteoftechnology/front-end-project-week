import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getNote } from '../store/actions';
import NoteDetails from '../components/NoteDetails';

const noteNavItems = {
  edit: 'edit',
  delete: 'remove'
};

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivPageWrapper = styled.div`
  width: 85%;
`;

const HeaderNote = styled.header`
  display: flex;
  justify-content: flex-end;
`;
const NavNoteLinks = styled.nav`
  margin: 20px;
`;
const LinkNote = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: black;

  &:not(:first-child) {
    margin-left: 40px;
  }

  &:hover {
    text-decoration: underline;

    /* Edit Note Button */
    color: ${props =>
      props.noteNavItem === noteNavItems.edit && `rgb(43, 193, 196)`};

    /* Delete Note Button */
    color: ${props => props.noteNavItem === noteNavItems.delete && `red`};
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class NoteView extends Component {
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  render() {
    return (
      <DivPageWrapper>
        {this.props.fetchingNote ? (
          <h2>Loading Note...</h2>
        ) : (
          <div>
            <HeaderNote>
              <NavNoteLinks>
                <LinkNote to='' noteNavItem={noteNavItems.edit}>
                  {noteNavItems.edit}
                </LinkNote>
                <LinkNote to='' noteNavItem={noteNavItems.delete}>
                  {noteNavItems.delete}
                </LinkNote>
              </NavNoteLinks>
            </HeaderNote>
            <NoteDetails {...this.props} />
          </div>
        )}
      </DivPageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note,
    fetchingNote: state.fetchingNote,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNote }
)(NoteView);
