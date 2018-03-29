import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
  render() {
    return (
      <div>
        <h3>Edit Note:</h3>
        <form>
          <input placeholder="title" />
          <input />
          <Link to="/DeleteModal">
            <button>Update</button>
          </Link>
        </form>
      </div>
    );
  }
}
export default EditNote;
