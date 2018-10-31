import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';

const SingleNoteViewContainer = styled.div`
  text-align: left;
  background: #f3f3f3;
  width: 75%;
`;

const TitleContainer = styled.div`
  height: 150px;
  padding-top: 85px;
  font-size: 2rem;
  padding-left: 4%;
`;

const SingleNoteView = props => {
  return (
    <SingleNoteViewContainer>
      <TitleContainer>{props.activeNote === undefined ? null : <h2>{props.activeNote.title}</h2>}</TitleContainer>
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
