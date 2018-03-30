import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditNote extends Component {
  render() {
    return (
      <div>
        <h3>Edit Note:</h3>
        <form>
          <input placeholder="title" />
          <textarea />
          <Link to="/FullNote/:id">
            <button>Update</button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};
export default connect(mapStateToProps)(EditNote);
