import React, { Component } from 'react';
import ViewNotesContainer from './components/ViewNotes/ViewNotesContainer';
import CreateNoteContainer from './components/CreateNotes/CreateNoteContainer';
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
constructor(props){
super(props);
	this.state={

	};
}  
	
/*componentDidMount() {
   axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }*/





/*componentDidUpdate(prevpProps,  prevState) {
if (prevState.notes !== this.state.notes){

	axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log("GET RESPONSE: ", response);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
}*/
	

	
render() {
    return (
      <div className="App">
      	<Route exact  path="/" component={ViewNotesContainer} />
        <Route exact path="/createnewnote" component={CreateNoteContainer} />	    
      </div>
    );
  }
}

export default App;
