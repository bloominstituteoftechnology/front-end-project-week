import React, { Fragment } from 'react';

const NoteListItem = ({ title, textBody }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      {textBody}
    </Fragment>
  );
};

export default NoteListItem;
