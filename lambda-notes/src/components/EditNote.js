
import React, { Component } from 'react';
import '../App.css';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      textBody: this.props.textBody,
      _id: this.props._id
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
      <div className="form-container sm-padding">
        <h2>Edit Note:</h2>
        <form onSubmit={(event) => {
                this.props.editNote(event, this.state, this.state._id);
                this.clearState();
                this.props.history.push("/"); 
            }}>
          <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          />
          <textarea 
            rows="20"
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
          />
          <button className="nav-link nav-link-sm" type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default EditNote;