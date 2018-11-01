import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';

const SingleNoteViewContainer = styled.div`
  text-align: left;
  width: 75%;
`;

const TitleContainer = styled.div`
  height: 150px;
  padding-top: 85px;
  font-size: 2rem;
  padding-left: 4%;
`;

const SingleNoteContainer = styled.div`
  text-align: left;
`;

const LinkContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  margin-right: 50px;
  color: black;
`;

const SingleNoteView = props => {
  return (
    <SingleNoteViewContainer>
      {props.activeNote === undefined ? null : props.activeNote === undefined ? null : (
        <TitleContainer>
          <LinkContainer>
            <StyledLink to="/">Edit</StyledLink>
            <StyledLink to="/">Delete</StyledLink>
          </LinkContainer>
          <h2>{props.activeNote.title}</h2>
          <SingleNoteContainer>
            <p>{props.activeNote.textBody}</p>
          </SingleNoteContainer>
        </TitleContainer>
      )}
    </SingleNoteViewContainer>
  );
};

const mapStateToProps = state => {
  return {
    activeNote: state.activeNote
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(SingleNoteView)
);
