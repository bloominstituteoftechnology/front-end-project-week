import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../../actions';
import NoteListItem from './NoteListItem';

const Container = styled.div`
  padding: 60px 20px;
`;

const ListContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Header = styled.h2`
  font-size: 34px;
  font-weight: bold;
`;

class NoteList extends Component {
  static propTypes = {
    notes: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchNotes();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.notes.note !== this.props.notes.note) {
      this.props.fetchNotes();
    }
  }
  render() {
    const { notes } = this.props.notes;
    const { error } = this.props.notes;

    if (error) return <h2>{error}</h2>;
    if (!notes) return <h2>Loading...</h2>;

    return (
      <Container>
        <Header>Your Notes: </Header>
        <ListContainer>
          {notes.map(note => <NoteListItem {...note} key={note._id} />)}
        </ListContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  notes: state
});
export default connect(
  mapStateToProps,
  actions
)(NoteList);
