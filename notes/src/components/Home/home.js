import React, { Component } from 'react';
import Main from '../main/main';
import Side from '../side/side';
import { Wrapper } from '../../style/style';

class Home extends Component {
  render() { 
    console.log(this.props.notes)
    return ( 
      <Wrapper>
      <Side/>
      <Main notes={this.props.notes}/>
      </Wrapper>
    );
  }
}
 
export default Home;