import React from 'react';
import NotesList from './NotesList';
import Sidebar from './Sidebar';

const DisplayNotes = () => {
  return ( 
    <div>
      <Sidebar />
      <NotesList />
    </div>
   );
};
 
export default DisplayNotes;