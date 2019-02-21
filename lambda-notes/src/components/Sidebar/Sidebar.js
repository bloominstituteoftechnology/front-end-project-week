import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H1, Div, ContainerStyle } from './styled-components/SidebarStyledComponents'

const Sidebar = props => {
 return (
      <ContainerStyle>
       <H1>Lambda Notes</H1>
       <Link to="/">
       <Div>
       <Button color="info">
       
       View Your Notes.</Button></Div></Link>
       {' '}
       <Link to="/create"><Button color="info">
       <Div>
       Add Note +</Div></Button></Link>
      </ContainerStyle>
    )
}

export default Sidebar