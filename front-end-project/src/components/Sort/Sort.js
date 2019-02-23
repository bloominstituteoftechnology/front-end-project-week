import React, { Component } from "react";
import styled from "react-emotion";

const Sort = props => {
  const { sortOptions, selectedTheme, sortBy } = props;
  {
    return (
      <Dropdown data-theme={selectedTheme}>
        <DropdownBtn data-theme={selectedTheme}>Sort By:</DropdownBtn>
        <DropdownContent data-theme={selectedTheme}>
          {sortOptions.map(sortOption => (
            <a onClick={() => {sortBy(sortOption);}}>{sortOption}</a>
          ))}
        </DropdownContent>
      </Dropdown>
    );
  }
};

export default Sort;

const Dropdown = styled("div")`
display: inline-block;
float: right;
  position: relative;
  justify-content: flex-end;

  :hover {
    div {
      display: block;
    }
  }
`;

const DropdownBtn = styled("button")`
  background-color: ${props => props.theme[props['data-theme']].button};
  color: ${props => props.theme[props['data-theme']].subBackground};
  padding: 16px;
  padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;;
  height: 50px;
  font-weight: bold;
  width: 105px;
`;

const DropdownContent = styled("div")`
  display: none;


  position: absolute;
  background-color: ${props => props.theme[props['data-theme']].mainBackground};
  min-width: 105px;
  right:0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    color: ${props => props.theme[props['data-theme']].subTitle};
    color: ${props => props['data-theme'] === 'bubbleGum' && '#fff'};
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    :hover{
        color: ${props => props.theme[props['data-theme']].subBackground};
        background:${props => props.theme[props['data-theme']].button} ;
    }
  }

`;
