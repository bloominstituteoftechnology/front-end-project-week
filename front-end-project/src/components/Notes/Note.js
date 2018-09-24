import React from 'react'
import styled from 'react-emotion'

const Note = props => {
    const {title, content, id} = props.note
    const {selectedTheme} = props
    return(
        <NoteCardDiv data-theme={selectedTheme} onClick={() => props.history.push(`/notes/${id}`)}>
            <h2>{title}</h2>
            <hr/>
            <p>{content}</p>
        </NoteCardDiv>
    )
}

const NoteCardDiv = styled('div')`
overflow:hidden;
padding: 10px 10px 60px;
width: 30%;
height: 200px;
border: 1px solid ${props => props.theme[props['data-theme']].border};
margin: 0 10px 20px;
color: ${props => props.theme[props['data-theme']].subTitle};
background: ${props => props.theme[props['data-theme']].subBackground};

`

export default Note