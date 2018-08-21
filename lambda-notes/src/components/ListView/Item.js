import React from 'react' 
import { NoteItem, H1, NoteTitle, P, H3, H4 } from '../StyledComponents';

function Item (props){
    return (
        <NoteItem onClick={props.onClick}>
            <NoteTitle>
                <H4>{props.title}</H4>
            </NoteTitle>
            <P>{props.textBody}</P>
        </NoteItem>
    )
}

export default Item