import React from 'react';
import SideBar from "../sidebar";
import IndividualNote from './individualNote';
import ModalExample from './modal';

const SingleNoteHolder = props => {
  return (
    <div className={'container'}>
      <SideBar />
      <IndividualNote {...props} notes={props.notes} />
    </div>
  )
};

export default SingleNoteHolder;
