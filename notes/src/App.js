import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import Home from './components/Home/home';
import { Container } from './style/style';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      notes:[]
    }
  }
  render() {
    return (
    <>
    <Header/>
    <Container>
    <Home/>
    </Container>
    <Footer/>
    </>
    );
  }
}

export default App;
