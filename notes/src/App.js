import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import Home from './components/Home/home';
import { data } from './components/data/data';
import Note from './components/notes/note';
import { Route }  from 'react-router-dom';
import { Wrapper } from './style/style';
import Side from './components/side/side';
import Form from './components/form/form';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      notes:[]
    }
  }

  componentDidMount(){
    this.setState({
      notes:data
    })
  }

  render() {
    console.log(this.state.notes)
    return (
    <>
    <Header/>
    <Wrapper>
    <Side/>
    <Route exact path="/" render={(props) => <Home {...props} notes={this.state.notes}/>}/>
    <Route exact path="/form" component={ Form } />
    <Route exact path='/notes/:id' render={(props) => <Note {...props}/>}/>
    </Wrapper>
    <Footer/>
    </>
    );
  }
}

export default App;
