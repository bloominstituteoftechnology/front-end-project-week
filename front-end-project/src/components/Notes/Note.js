import React from 'react'
import styled from 'react-emotion'
import Tag from './Tag';
import { TransitionGroup } from "react-transition-group";
import Transition from "react-transition-group/Transition";
import { TweenMax } from "gsap";

const Note = props => {
    const {title, textBody, _id, tags} = props.note
    const {selectedTheme} = props
    return(
        <NoteCardDiv className='stagger' data-theme={selectedTheme} >
        
        <span onClick={() => props.history.push(`/notes/${_id}`)}>
            <h2>{title}</h2>
            <hr/>
            <NoteContent>{textBody}</NoteContent>
            </span>
            <TagContainer>
                {tags.map(tag => tag ? <Tag tag={tag} {...props}/> : null)}
            </TagContainer>
            
        </NoteCardDiv>
    )
}

const NoteCardDiv = styled('div')`
overflow:hidden;
padding: 10px 10px 60px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
width: 30%;
height: 200px;
border: 1px solid ${props => props.theme[props['data-theme']].border};
margin: 0 10px 20px;
color: ${props => props.theme[props['data-theme']].subTitle};
background: ${props => props.theme[props['data-theme']].subBackground};
h2{
    color: ${props => props.theme[props["data-theme"]].subTitle};
    font-weight: bold;
}
`
const NoteContent = styled('p')`
max-height: 64px;
max-width: 350px;
width: 100%;
max-height: 64px;
max-width: 350px;
width: 100%;
overflow-y: hidden;
word-wrap: break-word;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;

`

const TagContainer = styled('div')`
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
`


export default Note