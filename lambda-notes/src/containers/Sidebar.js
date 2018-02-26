import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-2">
        <h1>Lambda Notes</h1>
        <button>View Your Notes</button>
        <button>+ Create Your Note</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Sidebar);
