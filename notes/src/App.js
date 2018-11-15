import React from 'react';
import "./App.css";
import "./css/note.css"
import axios from "axios";
import NoteList from './components/noteList';
import NoteView from './components/noteView';
import NoteCreate from './components/noteCreate';
import NoteEdit from './components/noteEdit';
import NoteDelete from './components/noteDelete';
import Nav from './components/nav';

class App extends React.Component {
  constructor() {
    super();

       /*****Set the initial state**** */
    this.state = {
      viewPage: null,
      noteList: [],
      inputText: '',
      title: "",
      textBody: "",
      id: "",
      tags: "",
    };
  }


  componentDidMount() {
    // check if key exists in local storage
   
    if (localStorage.getItem('viewPage')) {
      let pageType = localStorage.viewPage

      this.setState(() => ({ viewPage: pageType }));
    } else {
      let pageType = 'noteList'
      this.setState(() => ({ viewPage: pageType }));
    }

    /* this.setState({ viewPage: pageType }) */
    console.log("component did mount", this.state)
  }


  noteCreate = (e) => {
    e.preventDefault();
    localStorage.setItem('viewPage', "noteCreate");
    let pageType = `noteCreate`
    this.setState({ viewPage: pageType });
    console.log("noteCreate", this.state)
    //window.location.reload();
  }

  noteDelete = (e) => {
    e.preventDefault();
    localStorage.setItem('viewPage', "noteDelete");
    let pageType = `noteDelete`
    this.setState(() => ({ viewPage: pageType }))
    // window.location.reload();
  }

  noteEdit = (e) => {
    e.preventDefault();
    localStorage.setItem('viewPage', "noteEdit");
    let pageType = "noteEdit"
    this.setState(() => ({ viewPage: pageType }));
  }

  noteList = (e) => {
    e.preventDefault();
    localStorage.setItem('viewPage', "noteList");
    let pageType = "noteList"
    this.setState(() => ({ viewPage: pageType }));
    //  window.location.reload();
  }

  noteView = id => {
    //e.preventDefault();
    localStorage.setItem('viewPage', "noteView");
    let pageType = "noteView"
    let _id = id;
    this.setState(() => ({ viewPage: pageType, id: _id }));
    console.log("noteviewstate:", this.state)
    console.log("_id:", id)
    //  window.location.reload();
  }

  /********* Add Note Items to Array *****/
  addToList = event => {
    event.preventDefault();
    //grab the current state
    let newArr = this.state.noteList;
    let newNote = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    };
    newArr.push(newNote);
    //refresh the state
    this.setState({
      noteList: newArr,
      inputText: ''
    });
  };

  /******** Remove Completed Items *********/
  clearComplete = event => {
    event.preventDefault();
    let newNoteList = this.state.noteList.slice();
    newNoteList = newNoteList.filter(item => {
      return item.completed === false;
    });
    //refresh the state
    this.setState({
      noteList: newNoteList
    });
  };

  /******* Toggle Items Upon Completion *********/
  toggleComplete = id => {
    let tempNotes = this.state.noteList.slice();
    tempNotes.map(note => {
      //  note.id === id ? note.completed = !note.completed : "";
      return note;
    });
    //refresh the state
    this.setState({ noteList: tempNotes });
  };

  /******* Update User Input   ********/
  updateUserInput = event => {
    //refresh the state
    this.setState({ inputText: event.target.value });
  };

  saveNote = event => {
    event.preventDefault();
    
		axios.post('https://fe-notes.herokuapp.com/note/create', {
		  tags: this.state.tags,
		  title: this.state.title,
		  textBody: this.state.textBody,
		  /* id: this.state.id */
		})
		  .then(response => {
			this.setState(() => ({ notes: response.data }));
		  })
		  .catch(error => {
			console.log(error);
		  });
	
		this.setState({
			tags: '',
			title: '',
			textBody: '',
		 /*  id: '' */
		});
		window.location.reload();
    }
    
  changeHandler = (e) => {

    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }
  
  render() {
       
    /* let pageType = "noteCreate"; */
     let pageType = localStorage.getItem('viewPage'); 
    console.log("pagetype: ", pageType)
    switch (pageType) {
      case 'noteCreate':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} noteCreate={this.noteCreate} />
            <div className="main-display">
              <NoteCreate changeHandler={this.changeHandler} saveNote={this.saveNote}/>
            </div>
          </div>
        </div>;

      case 'noteDelete':
        return <div className="App">
          <div className="main-container">
            <Nav  noteList={this.noteList} noteCreate={this.noteCreate}/>
            <div className="main-display">
              <NoteDelete />
            </div>
          </div>
        </div>;

      case 'noteEdit':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} noteCreate={this.noteCreate} />
            <div className="main-display">
              <NoteEdit />
            </div>
          </div>
        </div>;

      case 'noteList':
        return <div className="App">
          <div className="main-container">
            <Nav noteList={this.noteList} noteCreate={this.noteCreate} />
            <div className="main-display">
              <NoteList noteView={this.noteView} notes={this.state.notes} />
            </div>
          </div>
        </div>;

     case 'noteView':
     return <div className="App">
       <div className="main-container">
         <Nav noteList={this.noteList} noteCreate={this.noteCreate} />
         <div className="main-display">
           <NoteView id={this.state.id} notes={this.notes}/>
         </div>
       </div>
     </div>;
    };
  }
}

export default App;