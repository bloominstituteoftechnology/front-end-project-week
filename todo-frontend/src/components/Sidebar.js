import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const SidebarContainer = Styled.aside`
    position: sticky;
    height: 100vh;
    top: 0;
    background-color: rgb(211,211,211);
`

const Button = Styled(Link)`
    background-color: rgb(0,184,188);
    color: rgb(213,241,241);
    font-weight: bold;
    font-size:1.3rem;  
    width: 80%; 
    padding: 10px;
    margin: 5px auto;
    display: block;
`

const Title = Styled.h2`
    color: rgb(22,22,22);
`

/** @type React.StatelessComponent<{}> */
const Sidebar = props => (
  <SidebarContainer>
    <Title>Lambda Notes</Title>
    <Button to="/">View your Notes</Button>
    <Button to="/new">+Create New Note</Button>
  </SidebarContainer>
)

export { Sidebar }
