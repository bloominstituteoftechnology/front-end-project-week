import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ListNotes from './Components/listnotes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button} from 'reactstrap';
 import Note from './Components/note'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [{ id: 0, title: 'Note1' , content: "This is an example note"}, { id: 1, title: 'Note2' , content: "This is an example note2"}, {id: 2, title: 'Note3' , content: "This is an example note3"},  {id: 3, title: 'Note4' , content: "This is an example note4"}]
    }
  }

  componentDidMount(){
    // this.notes.push('this is us')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Row>
        <Col sm='4'>
               this is a test
               <Button>
                 button 1
               </Button>
               <Button>
                 button 2
               </Button>
        </Col>
        <Col sm ='8'>
        <Switch>
         <Route exact path='/' render={() => <ListNotes notes={this.state.notes}/>}/>
         <Route path='/23' component = {Note} />
         </Switch>
         App is being called
         </Col>
         </Row>
        </div>
      </div>
    );
  }
}

export default App;
