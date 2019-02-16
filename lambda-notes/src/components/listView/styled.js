import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const List = styled.div `
  display: flex;
  flex-wrap: wrap
  
`

export const MainDiv = styled.div `
  border: 1px solid black
  width: 200px;
  height: 200px;
  text-align: left
  margin-right: 20px;
  margin-top: 30px;
  padding: 10px 20px;
`
export const MainList = styled.div `
`
export const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  
`
export const Text = styled.p `
  color: black;
  font-size: 1.6rem
`
export const Title = styled.h1 `
  font-weight: bold;
  font-size: 2.5rem
  text-align: left
  margin-left: 20px;
  margin-top: 60px;
`