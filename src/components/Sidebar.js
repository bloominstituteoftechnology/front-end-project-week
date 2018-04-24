import React from 'react'
import styled from 'styled-components'
import { LinkButton } from '.'

const Container = styled.div`
  background-color: #D2D1D2
  width: 280px
  display: flex
  flex-direction: column
  align-items: center
  border-right: 1px solid #AEAEAE
  padding: 15px
`

const Header = styled.h1`
  align-self: flex-start
  font-size: 2.5rem
`

const Sidebar = () => (
  <Container>
    <Header>Lambda Notes</Header>
    <LinkButton
      to='/'
      text='View Your Notes' />
    <LinkButton
      to='/create'
      text='+ Create New Note' />
  </Container>
)

export default Sidebar