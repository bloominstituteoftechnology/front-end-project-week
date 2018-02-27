import React, { Component } from 'react';

class Panel extends React.Component {
  render() {
    return (
      <div className="Panel">
        <p>Lambda Notes</p>
        <button>View Your Notes</button>
        <button onClick={this.props.handleClickForCreate}>+ Create New Note</button>
      </div>
    );
  }
};

export default Panel;
