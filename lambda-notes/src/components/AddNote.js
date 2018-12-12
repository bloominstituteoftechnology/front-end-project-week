//onSubmit={(event) => this.props.addNote(event, this.state) }

import React, { Component } from 'react';
import '../App.css';

class AddNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
    };
  }

  clearState = () => {
      this.setState({
        title: '',
        textBody: '',
      })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form-container">
        <h2>Create New Note:</h2>
        <form onSubmit={(event) => {
                this.props.addNote(event, this.state);
                this.clearState();
            }}>
          <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
            required
          />
          <textarea 
            rows="20"
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
            required
          />
          <button className="nav-link nav-link-sm" type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default AddNode;