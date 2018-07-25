import React, { Component } from 'react';

class CreateNote extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="create-note">
        <h1>Create New Note:</h1>
        <form>
          <input
            placeholder="Note Title"
          />
          <input
            placeholder="Note Content"
          />
        </form>
      </div>
    )
  }
}

export default CreateNote;
