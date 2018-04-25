import React from 'react'
import styled from 'styled-components'

const colors = {
  'delete': '#C70024'
}

const Wrapper = styled.div`
  width: 200px
  margin-bottom: 20px
  background-color: ${({ type }) => colors[type] || '#30B7BB'}
  color: white
  padding: 10px
  text-decoration: none
  border: 1px solid #AEAEAE
  &:hover {
    background-color: white
    color: ${({ type }) => colors[type] || '#30B7BB'}
  }
  text-align: center
  font-weight: bold
`

const ActionButton = ({ type, text, onClick }) => (
  <Wrapper type={type} onClick={onClick}>{text}</Wrapper>
)

export default ActionButton