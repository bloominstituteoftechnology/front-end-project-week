import styled  from 'styled-components'
import { Link } from 'react-router-dom'

export const MainDiv = styled.div `
  background-color: lightgrey;
  height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column
  padding-left: 20px;
  position: fixed
  top: 0
  left: 0
`

export const Title = styled.h1 `
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
`

export const Button = styled.div `
  width: 200px;
  height: 50px;
  background-color: teal;
  font-size: 2rem
  margin-top: 20px;
  padding: 10px
`

export const StyledLink = styled(Link) `
text-decoration: none
color: white;
`