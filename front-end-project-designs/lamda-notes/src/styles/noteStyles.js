import styled from "styled-components"

export const NotesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 28.3%;
  margin-top: 30px;

  h3 {
    width: 100%;
    font-size: 2.2rem;
    margin-bottom: 26px;
  }

  p {
    font-size: 1.7rem;
    line-height: 21px;
    margin-top: 8px;
  }
`

export const NoteWrapper = styled.div`
  border: 1px solid #cbcbcb;
  margin-right: 16px;
  margin-bottom: 22px;
  padding: 10px 2%;
  width: 30%;
`

export const Title = styled.div`
  font-weight: bold;
  border-bottom: 1px solid #cbcbcb;
  padding: 1px 2%;
  font-size: 2rem;
`
