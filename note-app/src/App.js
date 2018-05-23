import React, { Component } from 'react';
import Nav from './components/navSection';
import { Container, Col, Row} from 'reactstrap';
import './App.css';
import navSection from '../navSection';
import cardList from '../cardList';
import cardForm from '../cardForm';
import cardContent from './components/cardContent.js';
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
            <Route path='/create' component={cardForm} />
            <Route path='/view' component={cardContent} />
            </div>  
        </Container>
    );
  }
}

export default App;
