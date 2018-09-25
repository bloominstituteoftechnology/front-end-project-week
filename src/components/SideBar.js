import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <Div1 className="SideBar">
      <H1>Lambda<br /> Notes</H1>
      <Link to="/">
        <Button>View Your Notes</Button>
      </Link>
      <Link to="/new">
        <Button>+ Create New Note</Button>
      </Link>
    </Div1>
  )
}

const Div1 = styled.div`
  width: 25%;
  border: 1px solid #B7B7B7;
  text-align: center;
  background: #D3D2D3;
`
const H1 = styled.h1`
  text-align: left;
  margin-left: 7%;
  font-size: 3.5rem;
  line-height: 0.9;
`
const Button = styled.button``

export default SideBar