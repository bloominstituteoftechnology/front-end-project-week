import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    background-color: white;   
    border:1px solid blue;
    height:196px;
    width:193px;
    margin-right:15px;
    margin-bottom:20px;
    margin-top:13px;
`

const InnerCard = styled.div`
    padding-left:20px;
    padding-right:20px;
    padding-top:15px;

`
const CardHeading = styled.p`
    font-size:1.8rem;
    font-weight:bold;
    margin-bottom:5px;
`
const BorderDiv = styled.div`
    border-bottom:1px solid black;
`
const NoteBody = styled.p`
    font-size:1.6rem;
    margin-top:10px;
`

const Note = props =>{
    return(

            <WrapperDiv onClick={(event)=>{props.handleClick(event,props.data.id)}}>
                <InnerCard>
                    <BorderDiv>
                        <CardHeading>{props.data.title}</CardHeading>
                    </BorderDiv>
                    <NoteBody>{props.data.textBody}</NoteBody>


                </InnerCard>
            </WrapperDiv>

    )
}


export default Note;