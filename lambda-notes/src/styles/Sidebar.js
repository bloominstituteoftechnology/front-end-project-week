import styled from 'styled-components'

export const Container = styled.div`
  background: #d2d1d2;
  height: 100%;
  min-width: 220px;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  padding: 15px;

  > * {
    margin-bottom: 15px;
  }
  border-right: 1px solid #434343;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 3.4rem;
  line-height: 3.2rem;
  color: #434343;
`

export const Button = styled.button`
  background: #00bbbe;
  padding: 13px;
  border: 0px;
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: #007f82;
  }
`

export const DeleteButton = styled(Button)`
  background: #D50000;

  &: hover {
    background: #820202;
  }
`

export const SearchInput = styled.input`
  padding: 10px 5px;
  font-size: 1.6rem;
`

export const HR = styled.div`
  border: 2.5px solid grey;
`
