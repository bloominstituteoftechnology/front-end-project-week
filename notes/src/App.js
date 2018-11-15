import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import NoteList from './components/notes/noteList';
import { data } from './components/data/data';
import NoteView from './components/notes/noteView';
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
    <Route exact path="/" render={(props) => <NoteList {...props} notes={this.state.notes}/>}/>
    <Route exact path="/form" component={ Form } />
    <Route exact path='/noteView/:id' render={(props) => <NoteView {...props} notes={this.state.notes} />}/>
    </Wrapper>
    <Footer/>
    </>
    );
  }
}

export default App;
