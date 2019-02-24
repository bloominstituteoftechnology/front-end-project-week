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

const API = `https://venkynotesapi.herokuapp.com`;

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
     const token = localStorage.getItem('jwt');
     const options = {
       headers: {
          Authorization: token
       }
    };
     axios.get(`${API}/api/notes`, options)
//   axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then( response => {
            // console.log(`response from get method notes`, response);
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
       axios.post(`${API}/api/notes`, newNotes)
         .then( response => {
           newNotes.id = response.data.id;
           console.log(`Line 58 add content`, response);
           this.setState({ notes: [...this.state.notes, newNotes]});
       })
       .catch( error => {
          console.log(`we cannot create a note now`, error);
          this.setState({ errorMessage: "Error: There is some error getting notes"})
       })
}

updateContent = (id, editedNote) => {
       console.log(`update note`, editedNote);
       axios.put(`${API}/api/notes/${id}`, editedNote)
   //  axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, editedNote)
         .then( response => {
            // this.setState({notes:[editedNote, ...this.state.notes]})
            console.log(editedNote);
            this.fetNotes();
         })
         .catch( err =>
            // console.log('error updating the notes now', err)
            { this.setState({ errorMessage: "Cannot edit now"})
      })
}

deleteContent = (id) => {
    axios.delete(`${API}/api/notes/${id}`)
   //  axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
         .then( response => {
             this.fetNotes();
         })
         .catch(err => {console.log("Cannot delete now");
    })
 
}
resetState = () => {
   this.setState({
        notes:[]
   })
}

// refreshUser = () => { 
//    this.setState( this.forceUpdate());
// }   
  render() {
    const notes = this.state.notes;
    return (
      <div className="App">
        <MainContainer>
          <LambdaNotes reset = {this.resetState}
                       fetch={this.fetNotes } 
                       updateState={this.updateState} />
          <Route exact path='/' render={ props => 
            <Notes {...props}  notes={notes}/>}></Route>
          {/* <Notes notes={this.state.notes} /> */}
          <Route exact path='/notes' render={ props =>
                        <CreateView {...props} 
                           addContent={this.addContent} 
                           fetchNotes={this.fetNotes}
                           notes={notes} />}
                            />
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

