import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fuse from 'fuse.js';

import { fetchNotes, moveItem } from '../actions';
import ListView from '../components/ListView';

class ListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    let notes = this.props.notes;
    if (this.props.term !== '') {
      console.log(this.props.term);
      let fuse = new Fuse(notes, {
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title', 'textBody'],
      });
      notes = fuse.search(this.props.term);
    }

    return (
      <div>
        {this.props.isFetching ? (
          <div>Loading...</div>
        ) : (
          <ListView
            notes={notes}
            moveAfter={(target, source) =>
              target !== source && this.props.moveItem({ target, source })
            }
            moveBefore={(target, source) =>
              target - 1 !== source &&
              this.props.moveItem({ target: target - 1, source })
            }
          />
        )}
      </div>
    );
  }
}

export default connect(
  ({ notes, isFetching, term }) => ({ notes, isFetching, term }),
  { fetchNotes, moveItem },
)(ListContainer);
