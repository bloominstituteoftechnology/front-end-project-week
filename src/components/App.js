import React, { Component } from 'react'
import { Route } from 'react-router'
import { Sidebar, NotesList, NoteDetail } from '.'
import styled from 'styled-components'

const Container = styled.div`
  display: flex
  border: 1px solid #AEAEAE
  width: 1000px

  * {
    font-family: sans-serif
    color: #434343
  }
`

const Content = styled.div`
  background-color: #F2F1F2
  width: 100%
  padding: 30px
`

class App extends Component<{}> {
  render() {
    return (
    <Container>
      <Sidebar />
      <Content>
        <Route exact path='/' component={NotesList} />
        <Route path='/create' component={null} />
        <Route path='/edit/:id' component={null} />
        <Route path='/show/:id' component={NoteDetail} />
      </Content>
    </Container>
    )
  }
}

export default App