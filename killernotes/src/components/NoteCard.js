import React from 'react';

const NoteCard = props => {
  let { textBody } = props.note;
  if (textBody.length > 116) textBody = textBody.slice(0, 116) + ' ...';
  return (
    <div
      style={{
        width: '190px',
        height: '195px',
        padding: '8px',
        border: '1px solid #979797',
      }}
    >
      {props.note.title}
      <hr />
      {textBody}
    </div>
  );
};

export default NoteCard;
