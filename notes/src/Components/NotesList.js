import React from 'react';

class NotesList extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
      notes = [
        {
          id: 0,
          title: 'test1',
          content: 'my test note',
        },
        {
          id: 1,
          title: 'test2',
          content: 'my second test note'
        },
      ]
  //   }
  // }

  addNote (note) {
    this.notes.concat({
      id: this.id,
      title: this.title,
      content: this.content,
    })
  }

  render() {
    console.log(this.notes);
    return (
      <div>
        {this.notes.map((note) => {
          return(
            <div className = 'note' key={note.id}>
              <p>{note.title}</p>
              <p>{note.content}</p>
            </div>
          );
        })}
      </div>
    )
  }
}

export default NotesList;