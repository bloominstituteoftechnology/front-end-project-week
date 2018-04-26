import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button as buttonFactory } from 'components/Button'

const SidebarContainer = Styled.aside`
    position: sticky;
    height: 100vh;
    top: 0;
    background-color: rgb(211,211,211);
`

const Button = buttonFactory(Link)

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
