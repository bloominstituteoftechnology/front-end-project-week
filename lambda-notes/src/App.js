import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ListViewSection from './Components/ListView/ListViewSection'
import styled from 'styled-components';


const WrapperDiv = styled.div`
  margin:0 auto;
  max-width:890px;

`

class App extends Component {
  render() {
    return (
      <WrapperDiv>
        <Route exact path ='/' component={ListViewSection}></Route>
      </WrapperDiv>
    );
  }
}

export default App;
