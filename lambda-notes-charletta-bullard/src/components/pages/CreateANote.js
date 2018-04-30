import React from 'react';
import { Link } from 'react-router-dom';

export default class CreateANote extends React.Component {
  state = {
    title: '',
    body: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { title, body } = this.state;
    this.props.createANote({ title, body });
    this.setState({ title: '', body: '' });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className="createanote">
        <h2 className="section-title">Create New Note:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="createnote-titlebox"
            value={title}
            name="title"
            type="text"
            placeholder="Note Title"
            onChange={this.handleInputChange}
          />
          <br />
          <textarea
            className="createnote-bodybox"
            value={body}
            name="body"
            type="text"
            placeholder="Note Content"
            onChange={this.handleInputChange}
            required
          />
          <br />
          <Link to={'/'}>
            <button onClick={() => this.handleSubmit()} type="submit">
              Save
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
