import React from 'react'
import { Link } from 'react-router-dom'
import {Title, Button, MainDiv, StyledLink} from './styled'

export default function () {
  return (
    <MainDiv>
      <Title>Lambda Notes</Title>
      <Button>
        <StyledLink to={'/'}>View your Notes</StyledLink>
      </Button>
      <Button>
        <StyledLink to={'/create-note'}>+ Create New Note</StyledLink>
      </Button>
    </MainDiv>
  )
}