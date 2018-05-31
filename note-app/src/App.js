import React, { Component } from 'react';
import Nav from './components/navSection';
import { Container, Col, Row} from 'reactstrap';
import './App.css';
import navSection from './components/navSection.js';
import cardList from './components/cardList.js';
import cardForm from './components/cardForm.js';
import cardContent from './components/cardContent.js';
import editCard from './components/editCard.js';
import deleteCard from './components/deleteCard.js';
import { BrowserRouter as Router,Link,Route,Switch,} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Container className='App'>
        <div className ="nav">
            <Route path='/' component={navSection} />
            </div>
      < div className='listContainer'>
            <Route exact path='/' component={cardList} />
            <Route path='/cardForm' component={cardForm} />
            <Route path='/card' component={cardContent} />
            <Route path='/edit' component={editCard} />
            <Route path='/delete' component={deleteCard} />
            </div>  
        </Container>
    );
  }
}

export default App;
