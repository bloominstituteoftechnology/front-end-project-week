import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getNotes } from '../store/actions';
import ListNotes from '../components/ListNotes';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivPageWrapper = styled.div``;

const H1PageTitle = styled.h1``;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class ListNotesView extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <DivPageWrapper>
        <H1PageTitle>Your Notes:</H1PageTitle>
        <ListNotes {...this.props} />
      </DivPageWrapper>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    fetchingNote: state.fetchingNote,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(ListNotesView);
