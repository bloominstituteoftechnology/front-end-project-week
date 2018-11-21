import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route} from 'react-router-dom';
import LambdaNotes from './components/LambdaNotes';
import Notes from './components/Notes';
import MainContainer from './components/styles/MainContainer';
import CreateView from './components/CreateView';
import MyNote from './components/MyNote';
import EditNote from './components/EditNote';


class App extends Component {
constructor(props) {
   super(props);
   this.state ={
      notes:[],
      errorMessage: ''
   }
}
componentDidMount() {
   this.fetNotes();
}

fetNotes = () => {
  axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then( response => {
         
            this.setState({
                notes: response.data
            })
        })
        .catch( error => {
          this.setState({ errorMessage: "Error: There is some error getting notes"})
          setTimeout( () => {
             this.setState({ errorMessage: null})
          }, 1500)
        }
     )
}

addContent = (event,newNotes) => {
  event.preventDefault();
  axios.post(`https://fe-notes.herokuapp.com/note/create`, newNotes)
       .then( response => {
           console.log(newNotes.title);
           newNotes._id = response.data.success;
           this.setState({ notes: [newNotes, ...this.state.notes] })
       })
       .catch( error => {
          this.setState({ errorMessage: "Error: There is some error getting notes"})
       })
}

updateContent = (event, id, editedNote) => {
    event.preventDefault();
    axios.put('https://fe-notes.herokuapp.com/note/edit/${id}', editedNote)
         .then( response => {
            this.setState({notes:[editedNote, ...this.state.notes]})
         })
         .catch( err => { this.setState({ errorMessage: "Cannot edit now"})
      })
}

deleteContent = (event,id) => {
    event.preventDefault();
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
         .then( response => {
             this.fetNotes();
         })
         .catch(err => { this.setState({ errorMessage: "Cannot delete it now"})
    })
   
}
  render() {
    const notes = this.state.notes;
    return (
      <div className="App">
        <MainContainer>
          <LambdaNotes />
          <Route exact path='/' render={ props => <Notes {...props} notes={notes}/>}></Route>
          {/* <Notes notes={this.state.notes} /> */}
          <Route exact path='/notes' render={ props =>
                        <CreateView {...props} 
                           addContent={this.addContent} 
                           notes={notes} />}
                           fetNotes={this.fetNotes} />
          <Route path='/note/:id' render={ props =>
                        <MyNote {...props} notes= {notes} 
                         deleteContent={this.deleteContent} /> } />
          <Route path='/edit/:id' render={ props => 
                        <EditNote {...props} notes={notes}
                                    updateContent={this.updateContent} 
                                    fetNotes={this.fetNotes}  />}  />
                                 
          {/* <Route path="/avengers/:id" render={ props =>   <AvengerPage {...props} avengers={avengers} />}  /> */}
        </MainContainer>
      </div>
    );
  }
}

export default App;
