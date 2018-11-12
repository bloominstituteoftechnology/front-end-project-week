import React, { Component } from 'react';
import Main from '../main/main';
import Side from '../side/side';
import { Wrapper } from '../../style/style';

class Home extends Component {
  render() { 
    return ( 
      <Wrapper>
      <Side/>
      <Main/>
      </Wrapper>
    );
  }
}
 
export default Home;