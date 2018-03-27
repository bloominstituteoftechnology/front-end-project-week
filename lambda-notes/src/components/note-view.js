import React, { Component } from "react";
import { Link } from "react-router-dom";


class NoteView extends Component {
	state = {
		id: 0,
		title: '',
		body: ''
	};


  componentDidMount() {
    this.setState({
      id: this.props.note.id,
      title: this.props.note.title,
      body: this.props.note.body
    });
  }

  render() {
    const { id, title, body } = this.state;
    return (
      <div className="NoteView">
            <h2 className="List__Title">{title}</h2>
      		{body}
        </div>
    );
  }
}

export default NoteView;