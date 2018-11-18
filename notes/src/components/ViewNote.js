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

  render() {
    return (
      <div>
        <Link to={`/edit/${this.state._id}`}>edit</Link>
        {this.state.title}
        {this.state.textBody}
      </div>
    );
  }
}
