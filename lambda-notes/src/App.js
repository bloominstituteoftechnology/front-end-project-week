import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ListViewSection from './Components/ListView/ListViewSection';
import AddNewNoteContainer from './Views/AddNewNoteContainer';
import styled from 'styled-components';
import EditNoteContainer from './Views/EditNoteContainer';

const WrapperDiv = styled.div`
  margin:0 auto;
  max-width:890px;

`

class App extends Component {
  render() {
    return (
      <WrapperDiv>
        <Route exact path ='/' component={ListViewSection}></Route>
        <Route exact path ='/AddNote' component={AddNewNoteContainer}></Route>
        <Route exact path ='/Note/:id' component={EditNoteContainer}></Route>
      </WrapperDiv>
    );
  }
}

export default App;
