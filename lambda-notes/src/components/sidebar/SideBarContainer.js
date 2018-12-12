//rendered in App component
import React from 'react';
import NewNoteButton from './NewNoteButton'
import AllNotesButton from './AllNotesButton'
import styled from 'styled-components'

const SidebarWrap = styled.div `
width: 25%;
display: flex;
justify-content: flex-start;
flex-direction: column;
background-color: #D3D2D3;
padding: 0px;
`
const HeadlineWrap = styled.p `
font-size: 25px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bold;
flex: 8;
text-align: left;
line-height: 20%;
color: #7B726C;
margin-left:12px;
padding: 0px;
`;
const SidebarContainer= props => {
    return (
    <SidebarWrap>

        <HeadlineWrap>Lambda</HeadlineWrap>
        <HeadlineWrap>Notes</HeadlineWrap>

        <AllNotesButton/>
        <NewNoteButton/>

     </SidebarWrap>
  
    )
}
export default SidebarContainer;