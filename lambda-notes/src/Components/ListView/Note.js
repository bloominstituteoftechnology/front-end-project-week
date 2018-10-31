import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    background-color: white;   
    border:1px solid #D3D2D3;
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
    color:black;
    margin-bottom:5px;
`
const BorderDiv = styled.div`
    border-bottom:1px solid #D3D2D3;
`
const NoteBody = styled.p`
    font-size:1.6rem;
    color:black;
    margin-top:10px;
`

const Note = props =>{

    let text = props.data.textBody;
    if(text.length > 100)
    {
        text = text.substring(0,100)
        text = text + ' ...'
    }

    let testArray = text.split(' ');
    if(testArray[0].length>20)
    {
        text = text.substring(0,20)
        text = text + ' ...'
    }
    let header = props.data.title;
    if(header.length > 13)
    {
        header = header.substring(0,13)
        header = header + ' ...'
    }


    return(

            <WrapperDiv onClick={(event)=>{props.handleClick(event,props.data._id)}}>
                <InnerCard>
                    <BorderDiv>
                        <CardHeading>{header}</CardHeading>
                    </BorderDiv>
                    <NoteBody>{text}</NoteBody>


                </InnerCard>
            </WrapperDiv>

    )
}


export default Note;