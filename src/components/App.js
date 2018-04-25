import React, { Component } from 'react'
import { Route } from 'react-router'
import { Sidebar, NotesList, NoteDetail, NoteCreate, NoteEdit } from '.'
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
  padding: 30px 30px 5px 30px

  h1 {
    font-size: 2.3rem
  }
`

class App extends Component<{}> {
  render() {
    return (
      <Container>
        <Sidebar />
        <Content>
          <Route exact path='/' component={NotesList} />
          <Route path='/create' component={NoteCreate} />
          <Route path='/edit/:id' component={NoteEdit} />
          <Route path='/show/:id' component={NoteDetail} />
        </Content>
      </Container>
    )
  }
}

export default App