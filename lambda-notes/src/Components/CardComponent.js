import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    max-width: 50%;
    min-width:50%;
    min-height:200px;
    max-height:200px;
    background:#ffffff;
    border: 1px solid grey;
    padding:5px;
`;

const CardContainerNoteView = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    position:relative;
    top:-300px;
    width: 75%;
    margin-top:-100px;
    padding:20px;
`;

const TitleContainerNoteView = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
`;

const TitleContainer = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    word-break:break-word;
`;

const Title = styled.h2`
    display:flex;
    font-size:1em;
`

const BodyContainer = styled.div`
    display:flex;
    justify-content:center;
    word-break:break-word;
`;

const Body = styled.p`
    display:flex;
`

const BodyContainerNoteView = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
    position:relative;
    top:-150px;
`;

const Card = (props) => {
    if(props.noteView){
        return(
            <CardContainerNoteView>
                <TitleContainerNoteView>
                    <h2>{props.note.title}</h2>
                </TitleContainerNoteView>
                <BodyContainerNoteView>
                    <p>{props.note.textBody}</p>
                </BodyContainerNoteView>
            </CardContainerNoteView>
        )
    }

    return(
        <CardContainer>
            <TitleContainer>
               <Title>{props.note.title}</Title>
            </TitleContainer>
            <BodyContainer>
                <Body>{props.note.textBody}</Body>
            </BodyContainer>
        </CardContainer>

    )
}

export default Card;