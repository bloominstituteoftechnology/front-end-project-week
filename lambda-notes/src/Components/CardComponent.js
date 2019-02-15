import React from 'react';
import styled from 'styled-components';
import './CardComponent.css';

const CardContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width: 25%;
    margin-right:20px;
    margin-bottom:20px;
    border: 1px solid grey;
    overflow: auto;

`;

const CardContainerNoteView = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    width: 80%;
    margin-right:20px;
    margin-bottom:20px;
    overflow: auto;
`;

const TitleContainer = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
`;

const LineThrough = styled.div`
    display:flex;

    border-bottom:1px solid black;
`
const BodyContainer = styled.div`
    display:flex;
    justify-content:center;
`

const Card = (props) => {
    if(props.noteView){
        return(
            <CardContainerNoteView>
                <TitleContainer>
                    <h2>{props.note.title}</h2>
                </TitleContainer>
                <LineThrough></LineThrough>
                <BodyContainer>
                    <p>{props.note.textBody}</p>
                </BodyContainer>
            </CardContainerNoteView>
        )
    }

    return(
        <CardContainer>
            <TitleContainer>
               <h2>{props.note.title}</h2>
            </TitleContainer>
            <LineThrough></LineThrough>
            <BodyContainer>
                <p>{props.note.textBody}</p>
            </BodyContainer>
        </CardContainer>

    )
}

export default Card;