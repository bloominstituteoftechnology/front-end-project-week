import React, { Component } from 'react'
import styled from 'styled-components'
import { Sidebar } from '.'

const Container = styled.div`
  border: 1px solid #AEAEAE
  width: 1000px
  h1 {
    color: #434343
  }
  * {
    font-family: sans-serif
  }
`

class App extends Component<{}> {
  render() {
    return (
      <Container>
        <Sidebar />
      </Container>
    )
  }
}

export default App