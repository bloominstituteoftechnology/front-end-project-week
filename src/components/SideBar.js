import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdFormatListBulleted, MdAddCircleOutline } from 'react-icons/md'

const SideBar = () => {
  return (
    <Div1 className="SideBar">
      <H1>Lambda Notes</H1>
      <Div2>
        <Link to="/" title="My Notes">
          <MdFormatListBulleted1 />
        </Link>
        <Link to="/new" title="New Note">
          <MdAddCircleOutline1 />
        </Link>
      </Div2>
    </Div1>
  )
}

const Div1 = styled.div`
  font-family: 'Goudy Bookletter 1911';
  display: flex;
  justify-content: space-between;
`
const Div2 = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const H1 = styled.h1`
`
const MdFormatListBulleted1 = styled(MdFormatListBulleted)`
  color: black;
  font-size: 3rem;
  &:hover {
    background: black;
    color: white;
    border-radius: 3px;
    border: none;
    box-shadow: 0 0 20px lightgray;
  }
`
const MdAddCircleOutline1 = styled(MdAddCircleOutline)`
  color: black;
  font-size: 3rem;
  &:hover {
    background: black;
    color: white;
    border-radius: 3px;
    border: none;
    box-shadow: 0 0 20px lightgray;
  }
`

export default SideBar