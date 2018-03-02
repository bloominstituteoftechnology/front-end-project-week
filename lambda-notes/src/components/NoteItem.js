import React, { Component } from 'react';
import './NoteItem.css';

class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.processRedirect = this.processRedirect.bind(this);
  }
  
  processRedirect() {
    window.location.href = `notes/${this.props.id}`;
  }

  ellipsize() {
    var el = document.getElementById(`note-item__content--${this.props.id}`);
    var wordArray = el.innerHTML.split(' ');
    while (el.scrollHeight > el.offsetHeight) {
      wordArray.pop();
      el.innerHTML = wordArray.join(' ') + "&hellip;";
    }
  }

  componentDidMount() {
    const title = document.getElementById(`note-item__title--${this.props.id}`)
    const titleHeight = window.getComputedStyle(title).getPropertyValue('height');
    document.getElementById(`note-item__content--${this.props.id}`).style.height =
      `calc(190px - ${titleHeight})`;
    this.ellipsize();
  }

  render() {
    return (
      <div className="note-item" onClick={this.processRedirect}>
        <div className="note-item__title" id={`note-item__title--${this.props.id}`}>{this.props.title}</div>
        <div className="note-item__content" id={`note-item__content--${this.props.id}`}>{this.props.content}</div>
      </div>
    );
  }
};

export default NoteItem;
