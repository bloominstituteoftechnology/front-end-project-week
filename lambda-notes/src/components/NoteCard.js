import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.div`
  border: 1px solid #979797;
  width: 225px;
  height: 225px;
  padding: 20px;
  margin: 5px 5px;
  overflow: hidden;
`
const Title = styled.h2`
  overflow: hidden;
`

const NoteCard = ({ id, title, text })  => 
  <Link to={`/note/${id}`}>
    <Card>
      <Title>{title}</Title>
      <hr />
      <p>{text}</p>
    </Card>
  </Link>

NoteCard.defaultProps = {
  title: 'Note Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta, nisl at rutrum egestas, velit arcu accumsan.'
}

export default NoteCard
  
