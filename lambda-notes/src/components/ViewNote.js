import React from 'react';

const ViewNote = (props) => {
  return (
    <div>
      <div>
        {props.title}
      </div>
      <div>
        {props.textBody}
      </div>
    </div>
  );
};

export default ViewNote;