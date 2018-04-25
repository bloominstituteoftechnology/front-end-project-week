import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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

const ActionButton = ({ text, onClick }) => (
  <Wrapper onClick={onClick}>{text}</Wrapper>
)

export default ActionButton