import React from 'react';
import { connect } from 'react-redux';

import './css/ViewNote.css';

class ViewNote extends React.Component {
  render() {
    return (
      <div className="view">
        <div className="edit">edit</div>
        <div className="delete">delete</div>
        <h1 className="view-header"> {this.props.note.title} </h1>
        <p className="view-body"> {this.props.note.body} </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.current,
    note: state.note,
  };
};

export default connect(mapStateToProps, {})(ViewNote);
