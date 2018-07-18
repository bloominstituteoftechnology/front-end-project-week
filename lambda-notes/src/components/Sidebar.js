import React from 'react';
import Styled from 'styled-components'
import {Heading, Button} from './../styles/styles';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const Content = Styled.div`
  background: #D8D8D8;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 100vh;
  padding: 5px;
`;

const Sidebar = () => {
  return(
    <Content>
      <Heading main>Lambda Notes</Heading>
      <Link to='/notes'><Button> View Your Notes</Button></Link>
      <Link to='/new'><Button>Create New Note</Button></Link>
      <SearchBar />
      </Content>)
}

export default Sidebar;
