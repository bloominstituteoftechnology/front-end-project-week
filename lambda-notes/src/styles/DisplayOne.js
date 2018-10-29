import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  background: #f2f0f2;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin: 30px 10px 20px;
`

export const Body = styled.p`
  margin: 10px;
  width: 500px;
  font-size: 1.6rem;
`

export const ButtonsContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 40px;
  display: flex;
`

export const Button = styled.button`
  background: inherit;
  border: 0px;
  color: black;
  cursor: pointer;
  text-decoration: underline;
  font-size: 2rem;
`