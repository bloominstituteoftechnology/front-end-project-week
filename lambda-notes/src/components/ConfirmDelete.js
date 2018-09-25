import React from 'react';

class ConfirmDelete extends React.Component {
  render() {
    return (
      <div>
        <h2>Are you sure!?</h2>
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.props.confirmIt}>No</button>
      </div>
    )
  }
}

export default ConfirmDelete;