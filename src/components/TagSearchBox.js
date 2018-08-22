import React from 'react';
import TagDisplay from './TagDisplay';
import styled from 'styled-components';

const StyledTagSearchBox = styled.div`
    width: 100%;
`;

export default (props) => {
  let { tags, query, tagClick } = props;
  const escapedRegEx = new RegExp(
    query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
    'i'
  );

  if (query !== '') {
    // Performs tag search using regex if indicated
    tags = tags.filter(tag => escapedRegEx.test(tag.name));
  }

  return <StyledTagSearchBox><TagDisplay tags={tags} writable={false} tagClick={tagClick} /></StyledTagSearchBox>
  ;
};


