import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  background: #f2f0f2;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin: 30px 10px 20px;
`

export const Form = styled.form`
  margin: 10px;
  width: 500px;

  > * {
    margin-bottom: 20px;
  }
`

export const InputTitle = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1.6rem;
`

export const InputBody = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 15px;
  font-size: 1.6rem;
`

export const SaveButton = styled.button`
  background: #00bbbe;
  padding: 13px 30px;
  border: 0px;
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #007f82;
  }
`

