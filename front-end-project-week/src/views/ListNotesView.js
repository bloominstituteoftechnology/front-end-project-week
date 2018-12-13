import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
            <ListNotes
              notes={this.props.notes}
              noteDetailsLink={this.props.noteDetailsLink}
            />
          </div>
        )}
      </DivPageWrapper>
    );
  }
}

ListNotesView.propTypes = {
  getNotes: PropTypes.func,
  noteDetailsLink: PropTypes.string,
  fetchingNotes: PropTypes.bool,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.array,
      _id: PropTypes.string,
      title: PropTypes.string,
      textBody: PropTypes.string,
      __v: PropTypes.number
    })
  )
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(ListNotesView);
