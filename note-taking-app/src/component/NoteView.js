import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote';
import ReactMarkdown from 'react-markdown';
import './Notes.css';

export default class NoteView extends React.Component {
  boolModal = false;

  state = {
    id: 0,
    title: '',
    content: '',
  };

  toggleModal = _ => {
    this.boolModal = !this.boolModal;
    this.forceUpdate();
  }

  componentDidMount() {
    this.setState({
      id: this.props.note.id,
      title: this.props.note.title,
      content: this.props.note.content,
    });
  };

  render() {
    const { id, title, content } = this.state;
    return (
      <div className="NoteView">
        {this.boolModal ? (
          <div>
            <DeleteNote id={id} toggleModal={this.toggleModal} DeleteNote={this.props.DeleteNote} />
          </div>
        ) : (null)}
        <div className="NoteView-Links">
          <div>
            <Link className="NoteView-Links-Link" to={"/notes/edit/:id"}>edit</Link>
          </div>
          <div>
            <a className="NoteView-Links-Link" onClick={() => this.toggleModal()}>delete</a>
          </div>
        </div>
        <div>
          <h2 className="SectionTitle">{title}</h2>
          <ReactMarkdown source={content} />
        </div>
      </div>
    );
  };
}