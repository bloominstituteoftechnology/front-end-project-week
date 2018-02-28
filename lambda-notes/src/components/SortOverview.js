import React from 'react';
import { connect } from 'react-redux';

import './css/SortOverview.css';

class SortOverview extends React.Component {
  render() {
    return (
      <div className="sort">
        <h1 className="sort-header"> How Would You Like to Sort? </h1>
        <div>
            <button> Alphabetically by Title </button>
            <button> Chronologically by Date </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(SortOverview);