import React from 'react'
import styled from 'styled-components'
import LinkButton from './LinkButton'

const Container = styled.div`
  background-color: #D2D1D2
  width: 300px
  display: flex
  flex-direction: column
  border-right: 1px solid #AEAEAE
`

const Sidebar = () => (
  <Container>
    <h1>Lambda Notes</h1>
    <LinkButton
      to='/'
      text='View Your Notes' />
    <LinkButton
      to='/create'
      text='+ Create New Note' />
  </Container>
)

export default Sidebar