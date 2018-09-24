import React from 'react';
import SideBar from "./sidebar";
import IndividualNote from './individualNote';

const IndividualNoteComponents = props => {
  return (
    <div className={'container'}>
      <SideBar />
      <IndividualNote notes={props.notes} />
    </div>
  )
};

export default IndividualNoteComponents;
