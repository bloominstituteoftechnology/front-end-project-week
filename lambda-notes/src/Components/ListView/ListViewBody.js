import React from 'react';
import styled from 'styled-components';
import NotesContainer from '../../Views/NoteContainer'

const WrapperDiv = styled.div`
    margin-top:10px;
    border:1px solid red;
`

const NavSection = styled.div`

`
const NoteSection = styled.div`
    
`

const ListViewBody = props =>{
    return(
        <WrapperDiv>
            <NavSection>
            </NavSection>
            <NoteSection>
                <NoteContainer></NoteContainer>                
            </NoteSection>
        </WrapperDiv>
    )
}

export default ListViewBody;