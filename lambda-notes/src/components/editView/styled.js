import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: flex-start
`
export const Title = styled.input `
  width: 60%
  height: 50px;
  margin-bottom: 20px;
  margin-top: 25px;
`

export const Content = styled.textarea `
  width: 100%
  height: 400px;
`

export const StyledLink = styled(Link) `
width: 30%
height: 50px;
background-color: teal;
font-size: 1.8rem
margin-top: 20px;
padding: 10px
text-decoration: none
color: white;
font-weight: bold
`

export const MainDiv = styled.div `
 margin-top: 45px;
`