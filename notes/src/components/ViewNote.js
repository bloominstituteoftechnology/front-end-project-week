import React from 'react';
// import Note from './Note';
// import FilterNote from '../containers/FilterNote';

// const ViewNote = ({ notes }) => (
//   <div className='notesList'>
//   <h3>View Note</h3>
//     {notes.map(note =>
//       <Note
//         key={note.id}
//         {...note}
//         onClick={() => console.log(note.id, {...note})}
//         // onClick={() => <FilterLink filter={filter.FILTER_NOTE} />}
//       />
//     )}
//   </div>
// );

// export default ViewNote;
// import { store } from '../index.js';

// need to pull the id from the URL (react router)
// then, need to pull the note from state by its id
const ViewNote = ({ note }) => {
  return (
    <div className='viewNote'>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
    )
};

// export default ViewNote;

// export default ViewNote;

// const ViewNote = ({ match }) => {
//   return <h1>Hello {match.params.id}!</h1>
// }

export default ViewNote;