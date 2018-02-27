import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './button';
import NoteCard from './notecard';

const HomeContainer = styled.div`
  display: flex;
  h1 {
    font-size: 3.1rem;
    letter-spacing: 1px; 
    font-weight: bold;
    color: #4a494a;
  }
  .left {
    width: 210px;
    min-height: 700px;
    padding: 15px;
    background-color: #d7d7d7;
    border-right: 1px solid #bfbfc0;
  }
  .right {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
    align-content: flex-start;
    width: 620px;
    min-height: 700px;
    padding: 20px;
    background-color: #f3f3f3;
  }
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className='left'>
          <h1>Operation Babylon</h1>
          <Button backgroundColor='#5dbdc2' title='View Your Notes' />
          <Button backgroundColor='#5dbdc2' title='+ Create New Note' />
        </div>
        <div className='right'>
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>

      </HomeContainer>
    );
  }
}

export default Home;
