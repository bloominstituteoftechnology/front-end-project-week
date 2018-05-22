import React from 'react';
import Sidebar from '../../components/Sidebar';
import NoteList from '../../components/NoteList';

const List = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <NoteList />
    </React.Fragment>
  );
}
 
export default List;