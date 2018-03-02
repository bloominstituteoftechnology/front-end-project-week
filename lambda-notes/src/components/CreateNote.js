import React, { Component } from 'react';

class CreateNote extends Component {
  render() {
    return (
      <form>
        <input type="text" />
        <textarea></textarea>
        <button>Save</button>
      </form>
    );
  }
}

export default CreateNote;
