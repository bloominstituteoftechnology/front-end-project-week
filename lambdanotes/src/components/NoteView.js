import React from 'react';
import ReactMarkdown from 'react-markdown';
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
      <div className="NoteView">
        {this.boolModal ? (
          <div>
            <DeleteNote id={id} toggleModal={this.toggleModal} handleDeleteNote={this.props.handleDeleteNote} />
          </div>
        ) : (null)}
        <div className="NoteView-Links">
          <div>
            <Link className="NoteView-Links-Link" to={"/edit"}>edit</Link>
          </div>
          <div>
            <a className="NoteView-Links-Link" onClick={() => this.toggleModal()}>delete</a>
          </div>
        </div>
        <div>
          <h2 className="SectionTitle">{title}</h2>
          <ReactMarkdown source={body} />
        </div>
      </div>
    );
  };
}
