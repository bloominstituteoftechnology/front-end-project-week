import React from "react";
import Note from '../components/Note';
import styled from "styled-components";


const List = props => {

    const AltNotes = styled.div`
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 0 0 33.3333%
    `;
    const Banner = styled.div`
    height: 100px;
    margin: 20px 10px;
    padding: 40px 0;
    font-size: 3rem;
    font-weight: bold;
    `;
    return (
        <>
        <Banner>Your Notes:</Banner>
        <AltNotes >
        {props.notes.map((note) => 
        <Note  {...props} key={note._id} note={note}  /> )}
        </AltNotes>
        </>
    )

    
}



export default List;
