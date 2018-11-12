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
import { dummydata } from "./dummydata";

class NoteContainer extends Component {
  state = {
    notes: [],
    selectedTheme: "standardTheme",
    backupNotes: [],
    sortOptions: ["A-Z", "Z-A"],
    checklist: [],
    pagination: 12
  };
  //-------------------------------------------------------Create, Update, Delete Notes
  createNewNote = note => {
    //note.id = this.state.notes.length + 1;
    console.log(note)
    axios.post('http://localhost:9000/api/notes', note).then(notes => {
      console.log(notes.data);
      this.setState({
        notes: notes.data,
        backupNotes: notes.data
      })
    })
  };
  updateNote = newNote => {
    console.log(newNote)
    axios.put(`http://localhost:9000/api/notes/${newNote._id}`, newNote).then(notes => {
      this.setState({
        notes: notes.data,
        backupNotes: notes.data
      })
    })    
  };
  deleteNote = id => {
    axios.delete(`http://localhost:9000/api/notes/${id}`).then(notes => {
      this.setState({
        notes: notes.data,
        backupNotes: notes.data
      })
    })
  };
  //--------------------------------------------------------------------------Pagination
  loadPagination = () => {
    this.setState(prevState => {
      return {pagination: prevState.pagination + 12}
    })
  }

  resetPagination = () => {
    this.setState(prevState => {
      return {pagination: 12}
    })
  }
 
  
  //----------------------------------------------------------------------Filters
  filterByChar = event => {
    event.preventDefault();
    let value = event.target.value;
    // console.log(value);
    // console.log('notes',this.state.notes)
    // console.log('backup',this.state.backupNotes)
    if (this.props.match.url !== "/notes") {
      this.props.history.push("/notes");
    }
    const filteredNotes = this.state.backupNotes.filter(note => {
      return note.title.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    this.setState(state => {
      return {
        notes: filteredNotes
      };
    });

    // if (this.state.notes === filteredNotes){
    //   TweenMax.staggerFromTo('.stagger', 0.3, {opacity:0}, {opacity:1},0.1)
    // }
  };

  filterByTags = tag => {
    const notes = this.state.notes.filter(note => {
      return note.tags.includes(tag);
    });

    this.setState({
      notes: notes
    });
  };
  //--------------------------------------------------------------------------Sorting

  sortBy = sortOption => {
    switch (sortOption) {
      case "A-Z":
        this.setState({
          notes: this.state.notes.sort((a, b) => {
            let nameA = a.title.toUpperCase();
            let nameB = b.title.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
        });
        //TweenMax.fromTo('.stagger', 0.5, {opacity:0}, {opacity:1},0.1)
        break;

      case "Z-A":
        this.setState({
          notes: this.state.notes.sort((a, b) => {
            let nameA = a.title.toUpperCase();
            let nameB = b.title.toUpperCase();
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }
            return 0;
          })
        });
        ///TweenMax.fromTo('.stagger', 0.5, {opacity:0}, {opacity:1},0.1)
        break;

      case "Reset":
        const sortedNotes = this.state.backupNotes.filter(note => {
          return this.state.notes.includes(note);
        });

        this.setState({
          notes: sortedNotes
        });
        //TweenMax.fromTo('.stagger', 0.5, {opacity:0}, {opacity:1},0.1)
        break;
    }
  };
  //----------------------------------------------------------------------------------CheckList Functions

  addChecklist = note => {
    const { checklist } = this.state;

    const newList = [...checklist, note];

    if (!checklist.some(checkitem => checkitem._id === note._id)) {
      this.setState({ checklist: newList });
    } else {
      this.setState({
        checklist: newList.filter(checkitem => checkitem._id !== note._id)
      });
    }
  };

  //-----------------------------------------------------------------------------------Theme-Related Functions
  changeTheme = theme => {
    this.setState({
      selectedTheme: theme
    });
  };
  //-----------------------------------------------------------------------------------Axios Data calls
  fetchData = () => {
    const { notes, backupNotes } = this.state;
    //console.log(notes, backupNotes)
    this.setState({
      notes: backupNotes,
      backupNotes: backupNotes
    });
    axios
      .get("http://localhost:9000/api/notes")
      .then(res => {
        console.log(res);
        this.setState({
          notes: res.data,
          backupNotes: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  //-----------------------------------------------------------------------------------Life-Hooks
  componentDidMount() {
    this.fetchData();
    // this.setState({
    //   notes: dummydata,
    //   backupNotes: dummydata
    // })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname === "/notes") {
      TweenMax.fromTo(
        ".stagger",
        0.3,
        { opacity: 0, x: 25 },
        { opacity: 1, x: 0 }
      );
    }
  }

  render() {
    //------------------------------------------------------Components
    const { notes, selectedTheme, sortOptions, checklist, pagination } = this.state; //------------------------Deconstruction
    return (
      <ContainerDiv data-theme={selectedTheme}>
        <Route
          strict
          path="/notes"
          //------------------------------------------------------NavBar
          render={props => (
            <NavBar
              {...props}
              notes={notes}
              fetchData={this.fetchData}
              selectedTheme={selectedTheme}
              filterByChar={this.filterByChar}
            />
          )}
        />
        <Route path="/" />
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
                  filterByTags={this.filterByTags}
                  addChecklist={this.addChecklist}
                  selectedTheme={selectedTheme}
                  updateNote={this.updateNote}
                  deleteNote={this.deleteNote}
                  createNewNote={this.createNewNote}
                  notes={notes}
                  checklist={checklist}
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
                  pagination={pagination}
                  resetPagination={this.resetPagination}
                  loadPagination={this.loadPagination}
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
  justify-content: space-between;
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
  width: 100%;
`;

export default NoteContainer;

const lorem = `
nulla enim aute adipisicing esse in mollit nisi ea ea officia ea culpa qui consequat esse cillum sunt eu commodo velit tempor duis enim veniam irure
`;
