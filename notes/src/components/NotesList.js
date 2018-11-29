import React from 'react';
import styled from 'styled-components';

const CardSection=styled.div`
width:80%;
background-color:#ccd3e0;
display:flex;
height:100%;
flex-wrap:wrap;
justify-content:space-between;
padding-left:5%;
padding-right:5%
`

const StyledCard=styled.div`
width:28%;
background-color:white;
height:30%;
border:grey;
padding:1rem;

`
const Heading=styled.h1`
font-size:16px;
`

const NotesList=(props)=>{
    return(
        <CardSection>
            {props.notes.map((note)=>{
    return(
            <StyledCard>
                <Heading>{note.title}</Heading>
                
                <hr/>
                {note.textBody.slice(0,100)}
            </StyledCard>

    )
})}
        </CardSection>
    )
    


}
export default NotesList;