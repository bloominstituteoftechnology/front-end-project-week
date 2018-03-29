import React, { Component } from 'react';
import './index.css';
import './App.css';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import { Route} from 'react-router-dom';
import Data from './Data'
class App extends Component {
  render() {
    return (
     
      <div>
      <Route path="/Data" component={Data}/>
      <Route path="/CreateNote" component={CreateNote}/>
      <Route path="/EditNote" component={EditNote} />
      </div>
      
    );
  }
}

export default App;
 