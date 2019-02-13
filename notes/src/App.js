import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import NoteList from './components/notes/noteList';
import axios from 'axios';
import NoteView from './components/notes/noteView';
import EditNote from './components/notes/editNote';
import { Route }  from 'react-router-dom';
import { Wrapper } from './style/style';
import Side from './components/side/side';
import Form from './components/form/form';
import MyNotes from './components/notes/myNotes';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      notes:[],
      id:'all',
      tags:['Obed'],
      title:'',
      textBody:''
    }
  }

  clickHandler = id =>{
    this.setState({
      id:id
    })
  }

  handleChange =event =>{
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const url = process.env.REACT_APP_API_URL
    axios
    .post(`${url}`,{
        title: this.state.title,
        textBody: this.state.textBody,
    })
    .then(res =>{
      this.setState({id: res.data.success})
      this.props.history.push('/');
      window.location.reload();
    })
    .catch(err => console.log(err))
    this.setState({
      title:'',
      textBody:''
    });
  }

  deleteNote = e => {
    e.preventDefault();
    console.log(this.state.id);
    const url = process.env.REACT_APP_API_URL
    axios
      .delete(`${url}${this.state.id}`)
      .then(() => {
        this.setState({
          notes:this.state.notes
        });
        window.location.reload();
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
      
  };

  componentDidMount(){
    const url = process.env.REACT_APP_API_URL
    axios
    .get(`${url}`)
    .then(res => this.setState({
      notes:res.data
    }))
    .catch(err => console.log(err))
  }

  render() {
    return (
    <>
    <Header/>
    <Wrapper>
    <Side/>
    <Route exact path="/" render={(props) => <NoteList {...props} notes={this.state.notes} getId={this.clickHandler} id={this.state.id}/>}/>
    <Route exact path="/form" render ={(props) => <Form {...props}  update={this.handleChange} submit={this.handleSubmit} />}/>
    <Route exact path='/noteView/:id' 
    render={(props) => <NoteView {...props} 
    notes={this.state.notes} 
    delete={this.deleteNote}/>}
    />
    <Route exact path='/noteView/editNote/:id' component={EditNote}/>
    <Route exact path='/myNotes'component ={MyNotes}/>
    </Wrapper>
    <Footer/>
    </>
    );
  }
}

export default App;
