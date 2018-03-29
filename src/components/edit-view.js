import React, { Component } from "react";
import { Link } from 'react-router-dom';


class EditNote extends Component {
  state = { ...this.state };

  componentDidMount() {
    this.setState({
      id: this.props.note.id,
      title: this.props.note.title,
      body: this.props.note.body,
    });
  }

  handleUpdate = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { id, title, body } = this.state;
    this.props.handleEdit({ id, title, body });
    this.setState({ id: 0, title: '', body: '', });
  };

  render() {
    const { id, title, body } = this.state;
    return (
      <div className="Each">
        <h2 className="Each__Title">Edit Note:</h2>
        <form onSubmit={this.handleSubmit}>
          <input  value={title}
            name="title" type="text"
            onChange={this.handleUpdate} className="Each__Input-Title"
            minLength="1"
            required />
          <br />
          <textarea  className="Each__Input-Body"
            value={body} name="body"
            type="text" onChange={this.handleUpdate} 
            minLength="1" required />
          <br />
          <Link to={`/view/${id}`}><button onClick={() => 
            this.handleSubmit()} type="submit">Update</button></Link>
        </form>
      </div>
    );
  };
}

export default EditNote;
