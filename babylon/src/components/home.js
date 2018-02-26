import React, { Component } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 980px;
  margin: 0 auto;
  display: flex;
  .left {
    width: 240px;
    min-height: 700px;
    background-color: #d7d7d7;
  }
  .right {
    width: 740px;
    min-height: 700px;
    background-color: #f3f3f3;
  }
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className='left'>

        </div>
        <div className='right'>

        </div>

      </HomeContainer>
    );
  }
}

export default Home;
