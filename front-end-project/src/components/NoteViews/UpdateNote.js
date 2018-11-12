import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "react-emotion";
import { TransitionGroup } from "react-transition-group";
import Transition from "react-transition-group/Transition";
import { TweenMax } from "gsap";

class UpdateNote extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.notes);
    const note = this.props.notes.find(
      note => note._id === this.props.match.params.id
    );
    this.state = {
      titleInput: note ? note.title : "",
      contentInput: note ? note.textBody : "",
      tagInput: note ? note.tags.join(" ") : "",
      // isEditing: false,
      // isDeleting: false,
      show: true
    };
  }
  // state = {
  //   titleInput: "",
  //   contentInput: "",
  //   tagInput: '',
  //   // isEditing: false,
  //   // isDeleting: false,
  //   show: true
  // };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  sumbitNote = id => {
    console.log(this.state.tagInput.split(" "));
    //const newtags = this.state.tagInput ? this.state.tagInput.split(" ") : []

    this.props.updateNote({
      tags: this.state.tagInput,
      _id: id,
      title: this.state.titleInput,
      textBody: this.state.contentInput,
      
      // tags: this.state.tagInput
      //   ? this.state.tagInput.split(" ")
      //   : [...this.note.tags]
    });
  };

  render() {
    // const note = this.props.notes.find(
    //   note => note.id === parseInt(this.props.match.params.id, 10)
    // );
    const { selectedTheme } = this.props;

    const { titleInput, contentInput, tagInput } = this.state;
    console.log(selectedTheme);
    return (
      <NoteCardDiv>
        {<NoteTitle className= 'fade-update' data-theme={selectedTheme}>Update Notes:</NoteTitle>}
        {
          <NoteInput
          data-theme={selectedTheme}
          className= 'fade-update'
            name={"titleInput"}
            onChange={this.handleInput}
            value={titleInput}
          />
        }
        {
          <NoteText
          data-theme={selectedTheme}
          className= 'fade-update'
            name={"contentInput"}
            onChange={this.handleInput}
            value={contentInput}
          />
        }
        <TagTitle data-theme={selectedTheme}>Tags:</TagTitle>
        <TagInput
         data-theme={selectedTheme}
        className= 'fade-update'
          name="tagInput"
          onChange={this.handleInput}
          value={tagInput}
        />
        <NoteButton 
        className= 'fade-update'
          data-theme={selectedTheme}
          onClick={() => {
            if (titleInput && contentInput) {
              console.log(this.props.match.params.id);
              this.sumbitNote(this.props.match.params.id);
            }
            this.props.history.push("/notes");
          }}
        >
          Sumbit
        </NoteButton>
        <Transition
          in={this.props.match.url === `/notes/${this.props.match.params.id}/create`}
          appear={true}
          timeout={1000}
        >
          {state => {
            switch (state) {
              case "entering":
                TweenMax.staggerFromTo(
                  ".fade-update",
                  0.1,
                  { opacity: 0, x: 25 },
                  { opacity: 1, x: 0 },
                  0.1
                );

              case "entered":
                return null;
              case "exiting":
                TweenMax.to(".fade-update", 0.3, { opacity: 0 });
                return null;
              case "exited":
                return null;
            }
          }}
        </Transition>
      </NoteCardDiv>
    );
  }
}

const NoteCardDiv = styled("div")`
  width: 500px;
`;

const NoteInput = styled("input")`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  outline:none;
  transition: box-shadow 0.2s;
  border:1px solid ${props => props.theme[props["data-theme"]].border};
  :focus {
    box-shadow: 0 0 5px ${props => props.theme[props["data-theme"]].button};
    border: 1px solid  ${props => props.theme[props["data-theme"]].button};
  }
`;

const TagInput = styled(NoteInput)`
  width: 200px;

`;

const NoteText = styled("textarea")`
  width: 500px;
  height: 400px;
  outline:none;
  transition: box-shadow 0.2s;
  :focus {
    box-shadow: 0 0 5px ${props => props.theme[props["data-theme"]].button};
    border: 1px solid  ${props => props.theme[props["data-theme"]].button};
  }
`;

const NoteButton = styled("div")`
  cursor: pointer;
  margin: 10px 0;
  text-align: center;
  color: ${props => props.theme[props["data-theme"]].subBackground};
  background: ${props => props.theme[props["data-theme"]].button};
  
  padding: 10px;
  width: 200px;
  font-weight: bold;
  transition: transform .2s ease-in-out;
  :hover{
     transform: matrix(1.1, 0, 0, 1.1, 0, 0) !important;
  }
  :active{
    transform: matrix(1, 0, 0, 1, 0, 0) !important;
  }
`;

const NoteTitle = styled("h2")`
outline:none;
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;
const TagTitle = styled("h3")`
  color: ${props => props.theme[props["data-theme"]].mainTitle};
  margin: 15px 0 5px;
`;
export default UpdateNote;
