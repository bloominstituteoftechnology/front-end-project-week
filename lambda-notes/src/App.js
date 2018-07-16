import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../src/components/Sidebar'
import Content from '../src/components/Content'

const MainContainer = styled.div`
  border: 1px solid red;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`

const SidebarStyled = styled(Col)`
  background-color: #D8D8D8;
`
const ContentStyled = styled(Col)`
  background-color: #F3F3F3;
`
class App extends Component {
  render() {
    return (
      <MainContainer>
        <Container>
          <Row>
            <SidebarStyled md="3"><Sidebar/></SidebarStyled>
            <ContentStyled md="9"><Container><Content/></Container></ContentStyled>
          </Row>
        </Container>
      </MainContainer>
    );
  }
}

export default App;
