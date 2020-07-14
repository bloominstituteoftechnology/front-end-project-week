import React from 'react';
import styled from 'styled-components';
import NoteContainer from '../../Views/NoteContainer';
import NavSection from '../../Components/NavView/NavSection'

const WrapperDiv = styled.div`
    margin-top:10px;
    border:1px solid #CECECE;
    display:flex;
`

const NoteSection = styled.div`
    width:75%;
    background-color: #F2F1F2;
`
const SectionWrapper = styled.div`
    margin-top:62px;
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
            <NavSection></NavSection>
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