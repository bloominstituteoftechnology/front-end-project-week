import React from "react";
import styled from "react-emotion";

const Tag = props => {
    console.log(props);
  const { tag, selectedTheme, filterByTag } = props;
  return (
    <TagContainer
      data-theme={selectedTheme}
      onClick={() => props.filterByTags(tag)}
    >
      {tag}
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled("div")`
  border-radius: 45%;
  padding: 7px;
  border: 1px solid ${props => props.theme[props["data-theme"]].border};
  color: ${props => props.theme[props["data-theme"]].subBackground};
  background: ${props => props.theme[props["data-theme"]].button};
`;
