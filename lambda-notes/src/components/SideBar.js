import React from 'react'
import styled from 'styled-components';
import Button from './Button';

const SideBar = styled.div`
  width: ${ props => props.theme.dimensions.sideBar.width };
  padding: ${ props => props.theme.dimensions.sideBar.padding };
  background-color: ${ props => props.theme.color.sideBarBG };
  color: ${ props => props.theme.color.headingText };
  border-width: ${ props => props.theme.dimensions.sideBar.borderWidth };
  border-color: ${ props => props.theme.color.border };
  border-style: solid;
  
  h1 {
    font-family: ${ props => props.theme.font.heading};
    font-size: ${ props => props.theme.dimensions.sideBar.headingFontSize};
    margin: ${ props => props.theme.dimensions.sideBar.headingMargin };
    line-height: ${ props => props.theme.dimensions.sideBar.headingLineHeight };
  }
`;


export default () => {
  return (
    <SideBar>
      <h1>Lambda Notes</h1>
      <Button>View Your Notes</Button>
      <Button>+ Create New Note</Button>
    </SideBar>
  )
}
