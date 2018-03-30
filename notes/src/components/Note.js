import React from 'react';

// const Note = ({ onClick, title, content }) => (
//   <div
//     onClick={onClick}
//     className='noteCard'
//     >
//       <h4>{title}</h4>
//       <p>{content}</p>
//     </div>
// )

// export default Note;

import { Link } from 'react-router-dom';

const Note = ({ onClick, title, content, id }) => (
  <div
    onClick={onClick}
    className='noteCard'
    >
      <Link to='/viewnote/:id'>
      <h4>{title}</h4>
      <p>{content}</p>
      </Link>
    </div>
)

export default Note;