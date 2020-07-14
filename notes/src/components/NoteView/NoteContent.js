import React from 'react'
import styled from 'styled-components'

const ContentH1 = styled.h1`
    font-size: 25px;
    margin-top: 30px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
`
const ContentP = styled.p`
    margin-top: 30px;
    font-family: 'Source Sans Pro', sans-serif;
`
const NoteContent = (props) =>{
    return (
        <div>
            <ContentH1>{props.title}</ContentH1>
            <ContentP>{props.text}</ContentP>
        </div>
    )
}

export default NoteContent