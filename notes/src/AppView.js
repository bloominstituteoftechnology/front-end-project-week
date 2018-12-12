import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route } from 'react-router-dom';

// Component Imports
import SideBar from './components/sidebar/SideBar'
import NoteList from './components/NoteList';
import CreateNew from './components/CreateNew';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';
import {SyncLoader as Loader} from 'react-spinners';

class AppView extends Component {

  constructor(){
    super();
    this.state = 
    {
      notes : [],
      newNote : {
        title : '',
        textBody : '',
      },
      size : 'note-card',
      loading : false
    }
  }

  exportCsv = () => {
    var csvRow =[];
    var A = [['title','name']];//this will be the header portion of csv
    var data = this.state.notes; // bringing in all the notes from state
    for(var i =0;i < data.length;i++){
      A.push([data[i].title,data[i].textBody])//pushes all the data from state.notes and brings it in with A
    }
    for(let i = 0; i < A.length; i++){
      csvRow.push(A[i].join(','))//joins all the the arrays together and separates with a comma
    }
    let csvString=csvRow.join("%0A");//adds a space after every line
    //This is all the code to start the download
    let a = document.createElement("a");//creates an element through the document object
    a.href = 'data:attachment/csv,' + csvString; // href is set to  a csv file and filled with csvString
    a.target = "_Blank";
    a.download = "NotesFile.csv";//downloads file with the string being the download name
    document.body.appendChild(a);//IDK what this does
    a.click();
  }

  changeSize = bool => {
    if(bool === true){
      this.setState({size : 'note-card-dbl'})
    }else{
      this.setState({size : 'note-card'});
    }
  }

  refreshState(){
    axios.get('http://localhost:9000/note/get/all')
    .then(response => this.setState({notes : response.data,loading:true}))
    .catch(error => console.log("Refresh State:", error))
  }
  //        Functions for other components
  createNewSubmit = e =>{
    e.preventDefault();
    this.setState({loading : true})
    axios.post('http://localhost:9000/note/create',this.state.newNote)
    .then(response => {
      this.setState({/*notes : {response.data} */newNote : {
        title : '',
        textBody : '',
      }})
      this.refreshState();
    })
    .catch(error => alert(error));
  }
  onChangeHandler = e => {
    this.setState({newNote : {...this.state.newNote,[e.target.name] : e.target.value }})
    // console.log(this.state.newNote)
  }
  //        End Functions

  componentDidMount() {
    this.interval = setInterval(() => this.refreshState(), 300);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <div className="App">
        <SideBar />
        {!this.state.loading ? 
        <Loader 
        className="loading" 
        color={'#24B8BD'}
        size={'50'}
        /> 
        : 
        <Route exact path='/' render={() => <NoteList 
        size={this.state.size}
        changeSize={this.changeSize} 
        export={this.exportCsv} 
        notes={this.state.notes} 
        refresh={this.refreshState}
        /> } />}
        {/* <Route exact path='/' render={() => <NoteList 
        size={this.state.size}
        changeSize={this.changeSize} 
        export={this.exportCsv} 
        notes={this.state.notes} 
        refresh={this.refreshState}
        /> } /> */}
        {/* Create New Card Route  */}
        <Route path='/create-new' render={() => <CreateNew 
        submit={this.createNewSubmit} 
        onChangeHandler ={this.onChangeHandler}
        { ...this.props }
        />} />
        {/* View Card Route */}
        <Route path='/view/:id' render={(props) => <ViewNote {...props} refresh={this.refreshState} notes={this.state.notes} /> } />
        {/* Edit Card Route */}
        <Route path='/edit/:id' render={(props) => <EditNote {...props} refresh={this.refreshState} notes={this.state.notes} /> } />
      </div>
    );
  }
}

export default AppView;