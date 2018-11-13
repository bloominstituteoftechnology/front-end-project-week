import React, { Component } from 'react';
import Main from '../main/main';
import { Wrapper } from '../../style/style';

class Home extends Component {
  render() { 
    console.log(this.props.notes)
    return ( 
      <Wrapper>
      <Main notes={this.props.notes}/>
      </Wrapper>
    );
  }
}
 
export default Home;