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
    margin-bottom: 30px;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 3.4rem;
  line-height: 3.2rem;
`

export const Button = styled.button`
  background: #00bbbe;
  padding: 13px;
  border: 0px;
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #007f82;
  }
`
