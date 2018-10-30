import React from 'react';
import styled from 'styled-components';
import NoteContainer from '../../Views/NoteContainer';
import { Link } from 'react-router-dom';


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
    margin-top:62px;
    padding-left:20px;
    padding-right:20px;
`
const NotesTitle = styled.div`
    margin-bottom:25px;
    font-size:2rem;
    font-weight:bold;
`
const NavButton = styled.div`
    background-color:#2FB8BC;
    width:150px;
    height:35px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
`


const ListViewBody = props =>{
    return(
        <WrapperDiv>
            <NavSection>
                <p>Lambda Notes</p>
                <Link to="/AddNote"><NavButton>
                    <p>+ Create New Note</p>
                </NavButton></Link>
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