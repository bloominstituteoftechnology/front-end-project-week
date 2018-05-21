// React
import React, { Component } from 'react';
// CSS
import './NoteList.css';

class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  generateDummyNotes = () => {
    const dummyArr = [];
    for(let i = 0; i < 9; i++) {
      dummyArr.push({
        id: i,
        title: 'Note Title',
        text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...',
      })
    }
    return dummyArr;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={`note-list ${classes}`}>
        <h4>Your Notes:</h4>
        <div className={`note-view d-flex flex-wrap`}>
          { this.generateDummyNotes().map(obj => <NoteCard key={obj.id} {...obj} />)}
        </div>
      </div>
    );
  }
}

const NoteCard = (props) => {
  const { title, text } = props;
  return (
    <div className="note-card">
      <h3>{title}</h3>
      <hr />
      <p>{text}</p>
    </div>
  );
}

export default NoteList;