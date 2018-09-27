import React, { Component, Fragment } from "react";
import styled from "react-emotion";
import { TransitionGroup } from "react-transition-group";
import Transition from "react-transition-group/Transition";
import { TweenMax } from "gsap";

class NewNote extends Component {
  state = {
    titleInput: "",
    contentInput: "",
    show: true
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.contentInput);
  };

  sumbitNote = () => {
    const note = {
      title: this.state.titleInput,
      textBody: this.state.contentInput,
      tags: []
    };
    this.props.createNewNote(note);
    this.setState({
      titleInput: "",
      contentInput: ""
    });
    this.props.history.push(`/notes`);
  };

  render() {
    const { selectedTheme } = this.props;
    const { titleInput, contentInput } = this.state;
    return (
      <NoteForm>
        <Transition
          in={this.props.match.url === "/notes/create"}
          appear={true}
          timeout={1000}
        >
          {state => {
            switch (state) {
              case "entering":
                TweenMax.staggerFromTo(
                  ".fade-new",
                  0.1,
                  { opacity: 0, x: 25,  },
                  { opacity: 1, x: 0 },
                  0.1
                );
                
              case "entered":
                return null;
              case "exiting":
                TweenMax.to(".fade-new", 0.3, { opacity: 0, });
                return null;
              case "exited":
                return null;
            }
          }}
        </Transition>

        <Transition
          in={titleInput&&contentInput}
          appear={true}
          timeout={1000}
        >
          {state => {
            switch (state) {
              case "entering":
                TweenMax.staggerFromTo(
                  ".fade-btn",
                  0.2,
                  { opacity: 0, x: 50, display:'block' },
                  { opacity: 1, x: 0 },
                  0.1
                );
                
              case "entered":
                return null;
              case "exiting":
                console.log('object');
                TweenMax.to(".fade-btn", 0.2, { opacity: 0, x:50 });
                
              case "exited":
                //TweenMax.set('.fade-btn', {display:'none'})
                return null
            }
          }}
        </Transition>

        <NoteTitle data-theme={selectedTheme} className="fade-new">
          Create New Note:
        </NoteTitle>
        <NoteInput
        data-theme={selectedTheme}
          className="fade-new"
          name="titleInput"
          placeholder={"Note Text"}
          value={titleInput}
          onChange={this.handleInput}
        />
        <NoteText
        data-theme={selectedTheme}
          className="fade-new"
          name="contentInput"
          placeholder={"Note Content"}
          value={contentInput}
          onChange={this.handleInput}
        />
        {  <NoteButton
          className="fade-btn"
          data-theme={selectedTheme}
          onClick={this.sumbitNote}
        >
          Save
        </NoteButton>}
      </NoteForm>
    );
  }
}

const NoteInput = styled("input")`
outline: none;
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  transition: box-shadow 0.2s;
  border:1px solid ${props => props.theme[props["data-theme"]].border};
  :focus {
    box-shadow: 0 0 5px ${props => props.theme[props["data-theme"]].button};
    border: 1px solid  ${props => props.theme[props["data-theme"]].button};
  }
`;
const NoteText = styled("textarea")`
outline: none;
  width: 500px;
  height: 400px;
  transition: box-shadow 0.2s;
  border:1px solid ${props => props.theme[props["data-theme"]].border};
  :focus {
    box-shadow: 0 0 5px ${props => props.theme[props["data-theme"]].button};
    border: 1px solid  ${props => props.theme[props["data-theme"]].button};
  }
`;
const NoteButton = styled("div")`
display:none;
  cursor: pointer;
  margin: 10px 0;
  text-align: center;
  color: ${props => props.theme[props["data-theme"]].subBackground};
  background: ${props => props.theme[props["data-theme"]].button};
  border: 1px solid ${props => props.theme[props["data-theme"]].border};
  padding: 10px;
  width: 200px;
  font-weight: bold;
  transition: all .2s ease-in-out;
  :hover{
    transfrom: scale(1.1);
  }
`;

const NoteTitle = styled("h2")`
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

const NoteForm = styled("form")`
  display: flex;
  flex-direction: column;
`;

export default NewNote;
