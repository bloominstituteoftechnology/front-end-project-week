import React from 'react';
import SideBar from "./sidebar";
import YourNotes from './yourNotes';

const ListView = props => {
  return (
    <div className={'container'}>
      <SideBar />
      <YourNotes notes={props.notes} />
    </div>
  )
};

export default ListView;
