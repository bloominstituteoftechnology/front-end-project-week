import React from 'react';
import notestyles from './notestyles.css';
import uuid from 'uuid';

const data = [
  {
    id: uuid.v4(),
    title: 'Note title',
    text:
      'Some text and more textand more textand more textand more text and more text and more text and more text'
  },
  {
    id: uuid.v4(),
    title: 'Note title',
    text:
      'Some text and more textand more textand more textand more text and more text and more text and more text'
  },
  {
    id: uuid.v4(),
    title: 'Note title',
    text:
      'Some text and more textand more textand more textand more text and more text and more text and more text'
  }
];

// export default () => (
//   <div className="notelist">
//     {data.map(note => (
//       <div className="note" key={note.id}>
//         <h4>{note.title}</h4>
//         {note.text}
//       </div>
//     ))}
//   </div>
// );
