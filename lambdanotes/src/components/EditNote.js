import React from 'react';
import { Link } from 'react-router-dom';

export default class EditNote extends React.Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    this.setState({
      title: this.props.note.title,
      body: this.props.note.body,
    });
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = _ => {
    const { title, body } = this.state;
    this.props.handleEditNote({ title, body });
    this.setState({ title: '', body: '', });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h2>Edit Note:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={title}
            name="title"
            type="text"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <input
            value={body}
            name="body"
            type="text"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Link to={"/view"}><button onClick={() => this.handleSubmit()} type="submit">Update</button></Link>
        </form>
      </div>
    );
  };
}
