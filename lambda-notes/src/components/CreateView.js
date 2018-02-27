import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions";

class CreateView extends Component {
  state = {
    title: '',
    text: '',
  }

  render() {
    return (
      <div className="CreateView">
        <div className="header" />
        <h2>Create New View:</h2>
        <div className="NewNote">
          <form>
            <input autoFocus='true' type='text' name='title' placeholder='Note Title'/>
            <textarea name='text' placeholder='Note Content' rows='30' cols='85'></textarea>
            <button onSubmit={this.handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    );
  }

  handleSubmit = () => {

  }
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, { addNote })(CreateView);
