import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex
  justify-content: space-between
  flex-wrap: wrap 
  width: 100%
`

const NoteContainer = styled.div`
  width: 31.5%
  height: 200px
  overflow: hidden
  background-color: white
  border: 1px solid #AEAEAE
  padding: 10px
  margin-bottom: 25px

  h2 {
    border-bottom: 1px solid #AEAEAE
    padding-bottom: 10px
    margin: 0 0 10px
  }
`

const NotesList = (props) => {
  const noteElements = props.notes.map(note => (
    <Note {... note} />
  ))
  return (
    <Container>
      {noteElements}
    </Container>
  )
}

const Note = (props) => (
  <NoteContainer>
    <Link to={`/show/${props.id}`}><h2>{props.title}</h2></Link>
    <p>{props.content}</p>
  </NoteContainer>
)

const mapStateToProps = (state) => ({
  notes: state.notes
})

export default connect(mapStateToProps, {})(NotesList)