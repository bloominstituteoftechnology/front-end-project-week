import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNotes } from '../actions';
import ListView from '../components/ListView';

class ListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <div>Loading...</div>
        ) : (
          <ListView notes={this.props.notes} />
        )}
      </div>
    );
  }
}

export default connect(
  ({ notes, isFetching }) => ({ notes, isFetching }),
  { fetchNotes },
)(ListContainer);
