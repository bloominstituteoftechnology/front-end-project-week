import React from 'react';
import { connect } from 'react-redux';

import './css/SortOverview.css';

//Instead of changing pages for each switch, instead, just display different shit based on a state (alphabetically: false) etc

class SortOverview extends React.Component {
  state = {
    sort: 'sort',
  };
  render() {
    return (
      <div className="sort">
        {this.state.sort === 'sort' ? (
          <div>
            <h1 className="sort-header"> How Would You Like to Sort? </h1>
            <div>
              <button onClick={this.clickAlphabetically}> Alphabetically by Title </button>
              <button onClick={this.clickChronologically}> Chronologically by Date </button>
            </div>
          </div>
        ) : null}
        {this.state.sort === 'alphabetically' ? (
          <h1 className="sort-header"> Alphabetically Sorted </h1>
        ) : null}
        {this.state.sort === 'chronologically' ? (
          <h1 className="sort-header"> Chronologically Sorted </h1>
        ) : null}
      </div>
    );
  }
  clickAlphabetically = () => {
    this.setState({ sort: 'alphabetically' });
  };

  clickChronologically = () => {
    this.setState({ sort: 'chronologically' });
  };
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(SortOverview);
