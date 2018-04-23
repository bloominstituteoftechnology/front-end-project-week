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

  handleSubmit = _ => {
    const { title, body } = this.state;
    this.props.createNote({ title, body });
    this.setState({ title: '', body: '' });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className="CreateANote">
        <h2 className="SectionTitle">Create New Note:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="CreateNote-TitleBox"
            value={title}
            name="title"
            type="text"
            placeholder="Note Title"
            onChange={this.handleInputChange}
          />
          <br />
          <textarea
            className="CreateNote-BodyBox"
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
