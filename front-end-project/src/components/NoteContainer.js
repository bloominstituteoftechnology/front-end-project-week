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
    notes: [
      //   {
      //     id: 1,
      //     title: "Note1",
      //     content: lorem,
      //     tags: []
      //   },
      //   {
      //     id: 2,
      //     title: "Note2",
      //     content: lorem,
      //     tags: []
      //   },
      //   {
      //     id: 3,
      //     title: "Note3",
      //     content: lorem,
      //     tags: []
      //   },
      //   {
      //     id: 4,
      //     title: "Note4",
      //     content: lorem,
      //     tags: []
      //   },
      //   {
      //     id: 5,
      //     title: "Note5",
      //     content: lorem,
      //     tags: []
      //   },
      //   {
      //     id: 6,
      //     title: "Note6",
      //     content: lorem,
      //     tags: []
      //   }
    ],
    selectedTheme: "standardTheme"
  };

  createNewNote = note => {
    note.id = this.state.notes.length + 1;
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
    const notes = this.state.notes
      .filter(note => {
        return note._id !== id;
      })
      

    this.setState({ notes: notes });
  };

  filterByTags = tag => {
    const notes = this.state.notes
    .filter(note => {
      return note.tags.includes(tag)
    })

    this.setState({
      notes: notes
    })
  }

  changeTheme = theme => {
    this.setState({
      selectedTheme: theme
    });
  };

  componentDidMount() {
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({
          notes: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
      console.log(this.state.notes);
  }

  render() {
    const { notes, selectedTheme } = this.state;
    return (
      <ContainerDiv data-theme={selectedTheme}>
        <Route
          strict
          path="/notes"
          render={props => <NavBar {...props} selectedTheme={selectedTheme} />}
        />
        <ContentContainer>
          <Switch>
            <Route
              exact
              path="/notes/create"
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
              render={props => (
                <NoteView
                  {...props}
                  selectedTheme={selectedTheme}
                  updateNote={this.updateNote}
                  deleteNote={this.deleteNote}
                  notes={notes}
                />
              )}
            />
            <Route
              exact
              path="/notes"
              render={props => (
                <Notes notes={notes} {...props} filterByTags={this.filterByTags} selectedTheme={selectedTheme} />
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
  margin-left: 20%;
  width: 100%;
`;

export default NoteContainer;

const lorem = `
nulla enim aute adipisicing esse in mollit nisi ea ea officia ea culpa qui consequat esse cillum sunt eu commodo velit tempor duis enim veniam irure
`;
