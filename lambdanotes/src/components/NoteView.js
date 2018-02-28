import React from 'react';
import DeleteNote from './DeleteNote';
import { Link } from 'react-router-dom';

import './NoteView.css';

export default class NoteView extends React.Component {
  boolModal = false;

  state = {
    id: 0,
    title: '',
    body: '',
  };

  toggleModal = _ => {
    this.boolModal = !this.boolModal;
    this.forceUpdate();
  }

  componentDidMount() {
    this.setState({
      id: this.props.note.id,
      title: this.props.note.title,
      body: this.props.note.body,
    });
  };

  render() {
    const { id, title, body } = this.state;
    return (
      <div>
        {this.boolModal ? (
          <div>
            <DeleteNote id={id} toggleModal={this.toggleModal} handleDeleteNote={this.props.handleDeleteNote} />
          </div>
        ) : (null)}
        <div>
          <Link to={"/edit"}>edit </Link>
          <a onClick={() => this.toggleModal()}>delete</a>
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
