import React, { Component } from "react";
import { connect } from "react-redux";


class CreateNote extends Component {
  state = {
    note: {}
  };

  handleTodoInput = e => {
    this.setState({ todo: e.target.value });
  };

  render() {
      return <div className='col-sm-9 create-div'>
          <form className="create-form">
            <div class="form-group">
                <h4>Create New Note:</h4>
            </div>            
            <div class="form-group">
              <input class="form-title" placeholder="Note Title" />
            </div>
            <div class="form-group">
              <textarea class="form-control form-content" rows="9" placeholder="Note Content" />
            </div>
            <button type="submit" class="create-button">
              Save
            </button>
          </form>
        </div>;
  }


}

export default CreateNote;