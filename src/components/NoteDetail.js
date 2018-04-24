import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Markdown } from '.'
import styled from 'styled-components'

const Controls = styled.div`
  display: flex
  justify-content: flex-end
  a {
    margin-left: 20px
  }
`
const Container = styled.div`
  display: flex
  flex-direction: column
  align-items: flex-start
`

const Note = (props) => {
  return (
    <div>
      <Controls>
        <Link to={`/edit/${props.id}`}>Edit</Link>
        <Link to=''>Delete</Link>
      </Controls>
      <Container>
        <h1>{props.title}</h1>
        <Markdown markdown={props.content} />
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => state.selectedNote

export default connect(mapStateToProps, {})(Note)