import React, { Component } from "react";
import Notes from "./Notes/Notes";
import NavBar from "./NavBar/Navbar";
import styled from "react-emotion";
import NewNote from "./CreateNote/NewNote";
import NoteView from "./NoteViews/NoteView";
import UpdateNote from "./NoteViews/UpdateNote";
import Options from "./Options/Options";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import Transition from "react-transition-group/Transition";
import { TweenMax } from "gsap";

class NoteContainer extends Component {
  state = {
    notes: [],
    selectedTheme: "standardTheme",
    backupNotes: [],
    sortOptions: ['A-Z', 'Z-A'],
    checklist: []
  };
//-------------------------------------------------------Create, Update, Delete Notes
  createNewNote = note => {
    //note.id = this.state.notes.length + 1;
    this.setState(state => ({
      notes: [...this.state.notes, note]
    }));
  };
  updateNote = newNote => {
    const notes = this.state.notes.map(note => {
      if (note._id === newNote._id) {
        console.log("hi");
        return newNote;
      } else {
        return note;
      }
    });
    this.setState({
      notes: notes
    });
  };
  deleteNote = id => {
    const notes = this.state.notes.filter(note => {
      return note._id !== id;
    });

    this.setState({ notes: notes });
  };
  //----------------------------------------------------------------------Filters
  filterByChar = event => {
    event.preventDefault()
    let value = event.target.value;
    console.log(value);
    console.log('notes',this.state.notes)
    console.log('backup',this.state.backupNotes)

    this.setState(state => {
      return {
        
        notes: state.backupNotes.filter(note => {
          console.log(note.title.toUpperCase().indexOf(value.toUpperCase()))
          return (note.title.toUpperCase().indexOf(value.toUpperCase()) > -1);
        })
      };
    });
  };

  filterByTags = tag => {
    const notes = this.state.notes.filter(note => {
      return note.tags.includes(tag);
    });
    
    this.setState({
      notes: notes,      
    });
  };
//--------------------------------------------------------------------------Sorting

sortBy = sortOption => {
  switch(sortOption){
    case 'A-Z':
    this.setState({
      notes: this.state.backupNotes.sort((a,b) =>{
        let nameA = a.title.toUpperCase();
        let nameB = b.title.toUpperCase();
        if(nameA < nameB) {
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0;
      })
    })
    break;

    case 'Z-A':
    this.setState({
      notes: this.state.backupNotes.sort((a,b) =>{
        let nameA = a.title.toUpperCase();
        let nameB = b.title.toUpperCase();
        if(nameA < nameB) {
          return 1;
        }
        if (nameA > nameB){
          return -1;
        }
        return 0;
      })
    })
    break
  }
}
//----------------------------------------------------------------------------------CheckList Functions

addChecklist = note => {

const {checklist} = this.state

  const newList = [...checklist, note];
  
  if (!checklist.some(checkitem => checkitem._id === note._id)) { 
    this.setState({ checklist: newList }); 
  }else{
    this.setState({
      checklist: newList.filter(checkitem => checkitem._id !== note._id)
    })
  }

}




//-----------------------------------------------------------------------------------Theme-Related Functions
  changeTheme = theme => {
    this.setState({
      selectedTheme: theme
    });
  };
//-----------------------------------------------------------------------------------Axios Data calls
  fetchData = () => {
    console.log(this.state);
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log(response.data);
        this.setState({
          notes: response.data,
          backupNotes: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  //-----------------------------------------------------------------------------------Life-Hooks
  componentDidMount() {
    this.fetchData();
  }

  render() {//------------------------------------------------------Components
    const { notes, selectedTheme, sortOptions, checklist } = this.state;//------------------------Deconstruction
    return (
      <ContainerDiv data-theme={selectedTheme}>
        <Route
          strict
          path="/notes"
          //------------------------------------------------------NavBar
          render={props => (
            <NavBar
              {...props}
              fetchData={this.fetchData}
              selectedTheme={selectedTheme}
              filterByChar={this.filterByChar}
            />
          )}
        />
        <ContentContainer>
          <Switch>
            <Route
              exact
              path="/notes/create"
              //------------------------------------------------------Create New Notes
              render={props => (
                <NewNote
                  {...props}
                  selectedTheme={selectedTheme}
                  createNewNote={this.createNewNote}
                />
              )}
            />
            <Route
              exact
              path="/notes/options"
              //------------------------------------------------------Options
              render={props => (
                <Options
                  {...props}
                  selectedTheme={selectedTheme}
                  changeTheme={this.changeTheme}
                />
              )}
            />
            <Route
              exact
              strict
              path="/notes/:id/create"
              //------------------------------------------------------UpdateNote
              render={props => (
                <UpdateNote
                  {...props}
                  selectedTheme={selectedTheme}
                  updateNote={this.updateNote}
                  notes={notes}
                />
              )}
            />
            <Route
              exact
              path="/notes/:id/"
              //------------------------------------------------------NoteView
              render={props => (
                <NoteView
                  {...props}
                  addChecklist={this.addChecklist}
                  selectedTheme={selectedTheme}
                  updateNote={this.updateNote}
                  deleteNote={this.deleteNote}
                  notes={notes}
                  checklist= {checklist}
                />
              )}
            />
            <Route
              exact
              path="/notes"
              //------------------------------------------------------Notes main page
              render={props => (
                <Notes
                sortBy={this.sortBy}
                  notes={notes}
                  sortOptions={sortOptions}
                  
                  {...props}
                  filterByTags={this.filterByTags}
                  selectedTheme={selectedTheme}
                />
              )}
            />
            <Redirect to="/notes" />
          </Switch>
        </ContentContainer>
      </ContainerDiv>
    );
  }
}

const ContainerDiv = styled("div")`
  display: flex;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  min-width: 1100px;
  overflow-x: hidden;
  background: ${props => props.theme[props["data-theme"]].mainBackground};
  h1,
  h2 {
    ${props => {
      if (props["data-theme"] === "darkTheme") {
        return ` color:#fff;`;
      } else {
        return `color: ${props => props.theme[props["data-theme"]].mainTitle};`;
      }
    }};
  }
`;

const ContentContainer = styled("div")`

  margin-top: 4%;
  margin-left: 300px;
  max-width: 1110px;
  width:100%;
`;

export default NoteContainer;

const lorem = `
nulla enim aute adipisicing esse in mollit nisi ea ea officia ea culpa qui consequat esse cillum sunt eu commodo velit tempor duis enim veniam irure
`;
