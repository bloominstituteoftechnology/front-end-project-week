import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  width: 100%
  margin-bottom: 20px
  background-color: #30B7BB
  color: white
  padding: 10px
  text-decoration: none
  border: 1px solid #AEAEAE
  &:hover {
    background-color: white
    color: #30B7BB
  }
  text-align: center
  font-weight: bold
`

const LinkButton = (props) => (
  <Wrapper to={props.to}>{props.text}</Wrapper>
)

export default LinkButton