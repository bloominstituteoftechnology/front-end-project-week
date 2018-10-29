import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  background: #f2f0f2;
  overflow-wrap: break-word;
  overflow-y: scroll;
  width: 100%;
`

export const PageHeader = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin: 30px 10px 20px;
`

export const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Note = styled.div`
  width: 200px;
  border: 1px solid #434343;
  padding: 10px;
  margin: 10px;
  background: white;
  white-space: pre-wrap;
`

export const NoteTitle = styled.h2`
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  border-bottom: 1px solid grey;
  padding-bottom: 5px;
  margin-bottom: 10px;
`

export const NoteBody = styled.p`
  font-size: 1.6rem;
`
