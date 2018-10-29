import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Note = styled.div`
  width: 200px;
  border: 1px solid black;
`

export const NoteTitle = styled.h2`
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  border-bottom: 1px solid grey;
`

export const NoteBody = styled.p`
  font-size: 1.6rem;
`
