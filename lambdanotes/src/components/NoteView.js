import React from 'react';

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
        <h2>{title}</h2>
        <br />
        <p>{body}</p>
      </div>
    );
  };
}
