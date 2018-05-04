import React, { Component } from 'react';
import './index.css';
import './App.css';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import Login from './Login';
import { Route} from 'react-router-dom';
import Data from './Data'
class App extends Component {
    
  render() {
    return (
     
      <div>
        <Route path="/Login" component={Login}/>
      <Route path="/Data" render={(props) =><Data {...props} />}/>
      <Route path="/CreateNote" component={CreateNote}/>
     
      </div>
      
    );
  }
}

export default App;
 