import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import Home from './components/Home/home';
import { notes } from './components/data/data';
import Note from './components/notes/note';
import { Route }  from 'react-router-dom';
import { Container } from './style/style';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      notes:[]
    }
  }

  componentDidMount(){
    this.setState({
      notes:notes
    })
  }

  render() {
    return (
    <>
    <Header/>
    <Container>
    <Route path="/" render={(props) => <Home {...props} notes={this.state.notes}/>}/>
    <Route path='/note/:id' component={Note}/>
    </Container>
    <Footer/>
    </>
    );
  }
}

export default App;
