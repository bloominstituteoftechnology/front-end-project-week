import React from "react";
import styled from "react-emotion";

const Tag = props => {
   
  const { tag, selectedTheme, filterByTag } = props;
  return (
    <TagContainer
      data-theme={selectedTheme}
      onClick={() => {        
        if(props.location.pathname !== '/notes'){
          props.history.push('/notes')
        }
        props.filterByTags(tag)
      
      }}
    >
      {tag}
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled("div")`
  border-radius: 9%;
  padding: 7px;
  border: 1px solid ${props => props.theme[props["data-theme"]].border};
  color: ${props => props.theme[props["data-theme"]].subBackground};
  background: ${props => props.theme[props["data-theme"]].button};
  margin: 5px;
  transition: transform .2s ease-in-out;
  :hover{
     transform: matrix(1.1, 0, 0, 1.1, 0, 0) !important;
  }
  :active{
    transform: matrix(1, 0, 0, 1, 0, 0) !important;
  }
`;
