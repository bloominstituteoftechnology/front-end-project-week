import React, { Component } from 'react';
import './NoteItem.css';

class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.processRedirect = this.processRedirect.bind(this);
  }
  
  processRedirect() {
    window.location.href = `http://localhost:3000/notes/${this.props.id}`;
  }

  ellipsize() {
    var el = document.getElementById(`note__content--${this.props.id}`);
    var wordArray = el.innerHTML.split(' ');
    while (el.scrollHeight > el.offsetHeight) {
      wordArray.pop();
      el.innerHTML = wordArray.join(' ') + "&hellip;";
    }
  }

  componentDidMount() {
    const title = document.getElementById(`note__title--${this.props.id}`)
    const titleHeight = window.getComputedStyle(title).getPropertyValue('height');
    document.getElementById(`note__content--${this.props.id}`).style.height =
      `calc(190px - ${titleHeight})`;
    this.ellipsize();
  }

  render() {
    return (
      <div className="note" onClick={this.processRedirect}>
        <div className="note__title" id={`note__title--${this.props.id}`}>{this.props.title}</div>
        <div className="note__content" id={`note__content--${this.props.id}`}>{this.props.content}</div>
      </div>
    );
  }
};

export default NoteItem;
