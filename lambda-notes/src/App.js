import './App.css';
import React,{Component} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

const url='http://localhost:4444/notes';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      notes:[],
    };
  }
  componentDidMount(){
    axios.get(url).then(response=>{
      this.setState({notes:response.data});
      console.log(this.state.notes);
    }).catch(error=>{
      console.log(error);
    });
  }

render() {
  return (
    <div className="App">
      <Side />
      <Route exact path="/notes" render={(props) => <Notes {...props} notes={this.state.notes} />} />
    </div>
  );
}
}

export default App;
