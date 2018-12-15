import React from "react";
import Notes from '../components/notes';
import styled from "styled-components";

const NewList = props => {

    const ShortNotes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `;
    const HeadMessaging = styled.div`
    height: 100px;
    margin: 0px 10px;
    padding: 40px 0;
    font-size: 4rem;
    font-weight: bold;
    `;
    return (
        <>
        <HeadMessaging>Behold, Your List!:</HeadMessaging>
        <ShortNotes >
        

        {props.notes.map((note) => 
        <Notes  {...props} key={note._id} notes={note}  /> )}
        </ShortNotes>
        </>
    )

    
}



export default NewList;