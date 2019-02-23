import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import styled from "react-emotion";
import DeleteNote from "./DeleteNote";
import CheckList from "./CheckList";
import { TransitionGroup } from "react-transition-group";
import Transition from "react-transition-group/Transition";
import { TweenMax } from "gsap";
import Tag from "../Notes/Tag";

class NoteView extends Component {
  state = {
    isDeleting: false
  };

  notDeleting = () => {
    this.setState({ isDeleting: false });
  };

  render() {
    const note =
      this.props.notes &&
      this.props.notes.find(note => note._id === this.props.match.params.id);

    const { selectedTheme } = this.props;
    // let title = ''
    // let textBody = ''
    // let id = ''
    // if(note){
    //   { title, textBody, id } = {note};
    // }
    const { title, textBody, _id, tags } = note
      ? note
      : { title: "", textBody: "", _id: "" };
    const { isDeleting } = this.state;

    if (note) {
      return (
        <NoteCardContainer>
          {isDeleting && (
            <DeleteNote {...this.props} notDeleting={this.notDeleting} />
          )}
          <NoteCardDiv>
            <NoteTitle className="note-view" data-theme={selectedTheme}>
              {title}
            </NoteTitle>
            <PTitle  data-theme={selectedTheme} className="note-view">{textBody}</PTitle>

            {tags && <TagTitle data-theme={selectedTheme}>Tags:</TagTitle>}
            <TagContainer>
              {tags.map(
                tag => (tag ? <Tag tag={tag} {...this.props} /> : null)
              )}
            </TagContainer>
          </NoteCardDiv>
          <CheckList {...this.props} note={note} />
          <ButtonContainer>
            {/* <NoteViewButton data-theme={selectedTheme} className="note-view">
              Download
            </NoteViewButton> */}
            
            <NoteViewButton
              className="note-view"
              data-theme={selectedTheme}
              onClick={() => this.props.history.push(`/notes/${_id}/create`)}
            >
              Update
            </NoteViewButton>
            <NoteViewButton
              className="note-view"
              data-theme={selectedTheme}
              onClick={() => this.setState({ isDeleting: true })}
            >
              Delete
            </NoteViewButton>
          </ButtonContainer>

          <Transition in={isDeleting} appear={true} timeout={1000}>
            {state => {
              switch (state) {
                case "entering":
                  TweenMax.fromTo(
                    ".delete-menu",
                    0.2,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0 },
                    0.1
                  );
                  TweenMax.fromTo(
                    ".delete-container",
                    0.2,
                    { opacity: 0 },
                    { opacity: 0.8 }
                  );

                case "entered":
                  return null;
                case "exiting":
                  console.log("object");
                  TweenMax.to(".delete-menu", 0.2, { opacity: 0, x: 50 });

                case "exited":
                  //TweenMax.set('.fade-btn', {display:'none'})
                  return null;
              }
            }}
          </Transition>
          <Transition
            in={this.props.match.url === `/notes/${this.props.match.params.id}`}
            timeout={1000}
            appear={true}
          >
            {state => {
              switch (state) {
                case "entering":
                  TweenMax.staggerFromTo(
                    ".note-view",
                    0.2,
                    { opacity: 0, x: 50 },
                    { opacity: 1, x: 0 },
                    0.2
                  );
                  return null;
                case "entered":
                  return null;
                case "exiting":
                  return null;
                case "exited":
                  return null;
              }
            }}
          </Transition>
        </NoteCardContainer>
      );
    } else {
      return <Fragment />;
    }
  }
}

const PTitle = styled('p')`
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`

const NoteCardDiv = styled("div")`
  width: 500px;
`;

const NoteTitle = styled("h2")`
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

const NoteCardContainer = styled("div")`
  display: flex;
`;

const ButtonContainer = styled("div")`
  margin: 0px 0px 0px 120px;
  display: flex;
  justify-content: center;
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

  transition: transform 0.2s ease-in-out;
  :hover {
    transform: matrix(1.1, 0, 0, 1.1, 0, 0) !important;
  }
  :active {
    transform: matrix(1, 0, 0, 1, 0, 0) !important;
  }
`;

const NoteViewButton = styled(NoteButton)`
  width: 100%;
  margin: 0 10px;
  height: 36px;

  padding: 0;
  background: none;
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

const TagTitle = styled("h3")`
  color: ${props => props.theme[props["data-theme"]].mainTitle};
  width: 300px;
  margin: 50px 10px;
`;
const TagContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 300px;
`;

export default NoteView;
