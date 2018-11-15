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
      notes:[],
      id:Date.now(),
      title:'',
      content:''
    }
  }

  handleChange =event =>{
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    const note = {
      id:this.state.id,
      title: this.state.title,
      content: this.state.content,
    };
    this.setState({
      title:'',
      content:'',
      notes:[...this.state.notes, note]
    })
    this.props.history.push('/');
};

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
    <Route exact path="/form" render ={(props) => <Form {...props}  update={this.handleChange} submit={this.handleSubmit}/>}/>
    <Route exact path='/noteView/:id' render={(props) => <NoteView {...props} notes={this.state.notes} />}/>
    </Wrapper>
    <Footer/>
    </>
    );
  }
}

export default App;
