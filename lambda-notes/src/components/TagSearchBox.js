import React from 'react';
import TagDisplay from './TagDisplay';
import styled from 'styled-components';
import shortid from 'shortid';

const TagSearchBox = styled.div`
    width: 100%;
`;

export default ({ notes, query, tagClick }) => {
  const escapedRegEx = new RegExp(
    query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
    'i'
  );

  // Reduces notes array to only notes that fit search query
  const tags = notes.reduce((accum, note) => {
    // Performs tag search using regex if indicated
    for (let i = 0; i < note.tags.length; i++) {
      const tag = note.tags[i];
      if (query === '' || escapedRegEx.test(tag)) {
        accum[tag] = tag;
      }
    }
    return accum;
  }, {});

  const tagsArr = Object.values(tags);
  const tagObjs = tagsArr.map(name => ({name, id: shortid.generate()}));


  return <TagSearchBox><TagDisplay tags={tagObjs} writable={false} tagClick={tagClick} /></TagSearchBox>
  ;
};
