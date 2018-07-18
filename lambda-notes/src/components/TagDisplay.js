import React from 'react';
import shortid from 'shortid';

export default ({tags}) => {
  const tagElems = tags.map(tag => <li key={shortid.generate()}>{tag}</li>);

  return (
    <ul>
      {tagElems}
    </ul>
  );
};
