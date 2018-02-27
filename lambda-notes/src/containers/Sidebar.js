import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/actions'
import './Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-3 sidebar">
        <h1>Lambda Notes</h1>
        <button>View Your Notes</button>
        <button onClick={()}>+ Create Your Note</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { addNote })(Sidebar);
