import React from 'react';
import styled from 'styled-components';


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
    width: 75%;
    margin-top:-100px;
    overflow: auto;
`;

const TitleContainerNoteView = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
    position:absolute;
    top:100px;
    left:22%;
`;

const TitleContainer = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
`;

const BodyContainer = styled.div`
    display:flex;
    justify-content:center;
`;

const BodyContainerNoteView = styled.div`
    display:flex;
    justify-content:flex-start;
    width:100%;
    position:absolute;
    top:150px;
    left:22%;
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
               <h2>{props.note.title}</h2>
            </TitleContainer>
            <BodyContainer>
                <p>{props.note.textBody}</p>
            </BodyContainer>
        </CardContainer>

    )
}

export default Card;