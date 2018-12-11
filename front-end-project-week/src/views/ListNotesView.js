import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getNotes } from '../store/actions';
import ListNotes from '../components/ListNotes';

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

const H2PageTitle = styled.h2`
  margin: 85px 10px 10px 10px;
`;

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
        {this.props.fetchingNotes ? (
          <H2LoadingMessage>Loading Notes...</H2LoadingMessage>
        ) : (
          <div>
            <H2PageTitle>Your Notes:</H2PageTitle>
            <ListNotes {...this.props} />
          </div>
        )}
      </DivPageWrapper>
    );
  }
}

const mapStateToProps = state => {
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
