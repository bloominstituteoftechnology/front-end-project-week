import React from 'react';
import styled from 'styled-components';
import NoteContainer from '../../Views/NoteContainer'

const WrapperDiv = styled.div`
    margin-top:10px;
    border:1px solid #CECECE;
    display:flex;
`

const NavSection = styled.div`
    background-color:#D3D2D3;
    width:25%;
    border:1px solid #CECECE;

`
const NoteSection = styled.div`
    width:75%;
    background-color: #F2F1F2;
`
const SectionWrapper = styled.div`
    margin-top:50px;
    padding-left:20px;
    padding-right:20px;
`
const NotesTitle = styled.div`
    margin-bottom:25px;
    font-size:2rem;
    font-weight:bold;
`

const ListViewBody = props =>{
    return(
        <WrapperDiv>
            <NavSection>
                &nbsp;
            </NavSection>
            <NoteSection>
                <SectionWrapper>
                    <NotesTitle>Your Notes:</NotesTitle>
                    <NoteContainer></NoteContainer>                
                </SectionWrapper>
            </NoteSection>
        </WrapperDiv>
    )
}

export default ListViewBody;