import React, { Component } from 'react'
import { Route } from 'react-router'
import { Sidebar } from '.'
import styled from 'styled-components'

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

const Content = styled.div`
  flex-grow: 1
`

class App extends Component<{}> {
  render() {
    return (
      <Container>
        <Sidebar />
        <Content>
          <Route exact path='/' component={null} />
          <Route path='/create' component={null} />
          <Route path='/edit/:id' component={null} />
          <Route path='/show/:id' component={null} />
        </Content>
      </Container>
    )
  }
}

export default App