import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #979797;
  width: 225px;
  height: 225px;
  padding: 20px;
  margin: 5px 5px;
`

const NoteCard = ({ title, text })  => 
  <Card>
    <h2>{title}</h2>
    <hr />
    <p>{text}</p>
  </Card>

NoteCard.defaultProps = {
  title: 'Note Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta, nisl at rutrum egestas, velit arcu accumsan.'
}

export default NoteCard
  
