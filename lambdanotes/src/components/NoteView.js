import React from 'react';
import { Link } from 'react-router-dom';

export default class NoteView extends React.Component {
  state = {};

  componentDidMount() {
    this.handleEmptyNote();
  };

  handleEmptyNote = _ => {
    if (this.props.note === undefined) {
      this.setState({
          title: '',
          body: '',
      });
    } else {
      this.setState({
          title: this.props.note.title,
          body: this.props.note.body,
      });
    }
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <div>
          <Link to={"/edit"}>edit</Link>
        </div>
        <div>
          <h2>{title}</h2>
          <br />
          <p>{body}</p>
        </div>
      </div>
    );
  };
}
