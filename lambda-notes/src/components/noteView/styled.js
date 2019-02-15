import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainDiv = styled.div `
// background-color: lightgrey;
`
export const Links = styled.div `
  display: flex
  justify-content: flex-end
  margin-top: 10px;
  margin-bottom: 20px;
`

export const StyledLink = styled(Link) `
  text-decoration: underline;
  font-weight: bold
  color: black
`

export const Edit = styled(StyledLink) `
  margin-right: 10px;
`

export const Content = styled.div `
  text-align: start
`
export const H1Header = styled.h1 `
  margin-bottom: 25px;
`
export const PTag = styled.p `
  font-size: 1.4rem
`
export const Time = styled.p `
  font-size: 1.1rem;
  color: black;
  margin-top: 20px;
  text-align: end;
`