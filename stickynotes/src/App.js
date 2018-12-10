import React, { Component } from 'react';
import {GlobalStyle, AppContainer} from './style';
import {Route} from 'react-router-dom';
import axios from 'axios';
import SideNav from './components/SideNav';
import NoteList from './components/NoteList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount(){
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response =>{
        console.log(response)
        this.setState({
          notes: response.data
        })
      })
      .catch(err =>{
        console.log(err)
      });
  }
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
      <AppContainer>
        <SideNav />
        <Route 
        exact path= {'/'}
        render={props => 
          <NoteList {...props} notes={this.state.notes} />
        }
        
        />
      </AppContainer>
      </React.Fragment>
      
    );
  }
}

export default App;
