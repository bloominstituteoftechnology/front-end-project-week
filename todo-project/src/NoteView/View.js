import React from 'react'
import { NavLink } from 'react-router-dom'

const containNote = {
    'margin': '4% 1.5%'
}

const links = {
    'display': 'flex',
    'justifyContent': 'flex-end',
    'fontWeight': 'bold',
    'textDecoration': 'underline',
    'cursor': 'pointer'
}

const spacing = {
    'marginRight': '1%'
}


const View = props => {
    return (
        <div>
            <div style={links}>
        <NavLink exact to={`/${props.note._id}/edit-note`} style={spacing}>edit</NavLink> <NavLink exact to='/' ><div style={spacing} onClick={() => props.deleteNote(props.note._id)} >delete</div></NavLink>
            </div>
        <div style={containNote}>
        <h1>{props.note.title}</h1>
        <div>{props.note.textBody}</div>
        </div>
        </div>
    )
}

export default View;