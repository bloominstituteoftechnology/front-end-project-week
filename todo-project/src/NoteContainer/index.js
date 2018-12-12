import React, { Component } from 'react'
import NotesMain from './NoteDisplay/NotesMain'
import styled from 'styled-components'

const NotesContainer = styled.div`
  margin: 0 auto;
  width: 100%;
` 

export default class NoteContainer extends Component {
  render() {
    return (
      <NotesContainer>
          <NotesMain />
      </NotesContainer>
    )
  }
}