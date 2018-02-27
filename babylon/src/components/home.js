import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    min-height: 400px;
    padding: 15px;
    background-color: #d7d7d7;
    border-right: 1px solid #bfbfc0;
  }
  .right {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 620px;
    min-height: 700px;
    padding: 20px;
    background-color: #f3f3f3;
  }

  h2 {
    width: 100%;
    margin: 30px 0 5px 10px;
    font-size: 2rem;
    letter-spacing: 1px; 
    font-weight: bold;
    color: #4a494a;
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
          <h2>Your Notes:</h2>
          {this.props.notes.map((note, index) => {
            return (
              <NoteCard key={index} note={note} />
            );
          })}
        </div>

      </HomeContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(Home);
