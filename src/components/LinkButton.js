import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  background-color: #30B7BB
  color: white
  padding: 10px
  width: 200px
`

const LinkButton = (props) => (
  <Link to={props.to}><Button>{props.text}</Button></Link>
)

export default LinkButton