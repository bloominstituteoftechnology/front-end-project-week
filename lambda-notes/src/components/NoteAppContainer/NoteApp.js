import React from 'react'
import SidebarContainer from '../SidebarContainer/SidebarContainer'
import NoteContainer from '../NoteContainer/NoteContainer'
import styled from 'styled-components'
import DefaultView from '../NoteAppViews/DefaultView';

const NoteAppStyle = styled.div `
 display: flex;
 flex-direction: row ;
`

const NoteApp = props => {
  return (
    <div>
     <NoteAppStyle>
       <SidebarContainer/>
       <DefaultView match={props.match}/>
     </NoteAppStyle>
    </div>
  )
}

export default NoteApp
