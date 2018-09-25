import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = { 
      notes: [
      {
        id: uuid.v4(),
        title: 'Finish Notes App',
        textBody: 'Do stretch goals'
      },
      {
        id: uuid.v4(),
        title: 'Turn in Notes app',
        textBody: 'Fill out airtable'
      }
    ]
  };
} 
render() {
  const {notes} = this.state;

  return (
    <div>
      
      <Notes notes={notes} onDelete={this.deleteNote} />
      <button onClick={this.addNote}>Add Note</button>
    </div>
  );
}

addNote = () => {
  // It would be possible to write this in an imperative style.
  // I.e., through `this.state.notes.push` and then
  // `this.setState({notes: this.state.notes})` to commit.
  //
  // I tend to favor functional style whenever that makes sense.
  // Even though it might take more code sometimes, I feel
  // the benefits (easy to reason about, no side effects)
  // more than make up for it.
  //
  // Libraries, such as Immutable.js, go a notch further.
  this.setState({
    notes: this.state.notes.concat([{
      id: uuid.v4(),
      title: 'New task',
      textBody: 'New Body'
    }])
  });
}

deleteNote = (id, e) => {
  e.stopPropagation();

  this.setState({
    notes: this.state.notes.filter(note => note.id !== id)
  });
  }
}


