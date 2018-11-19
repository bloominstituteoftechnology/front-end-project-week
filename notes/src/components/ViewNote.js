import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      title: '',
      textBody: '',
    };
  }

  componentDidMount() {
    const note = this.props.notes.find(
      note => `${note._id}` === this.props.match.params.id
    );
    this.setState(note);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.title === '' ||
      this.props.match.params.id !== prevProps.match.params.id
    ) {
      const note = this.props.notes.find(
        note => `${note._id}` === this.props.match.params.id
      );
      this.setState(note);
    }
  }

  deleteNote = () => {
    this.props.deleteNote(this.state._id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="view-note">
        <Link to={`/edit/${this.state._id}`}>edit</Link>
        <span onClick={this.deleteNote}>delete</span>
        {this.state.title}
        {this.state.textBody}
      </div>
    );
  }
}
