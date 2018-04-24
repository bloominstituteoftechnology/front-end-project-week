// @flow

import React from 'react'
import styled from 'styled-components'

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
  </Container>
)

export default Sidebar