import React, { Component } from "react";
import styled from "react-emotion";
import Transition from "react-transition-group/Transition";
import TweenMax from "gsap";
import {Linear, RoughEase} from 'gsap'
import Note from "../Notes/Note";

class NavBar extends Component {
  state = {
    input: ""
  };
  handleInput = event => {
    this.setState({ input: event.target.value });
    console.log(this.state.input);
  };
  render() {
    const { selectedTheme, filterByChar, notes } = this.props; //---------Deconstruction
    return (
      <Header data-theme={selectedTheme}>
        <h1>Lambda Notes</h1>
        <Button
          //--------------------------------------------------------View Notes Button
          data-theme={selectedTheme}
          onClick={() => {
           
            if(this.props.location.pathname === '/notes'){
              this.props.fetchData()              
            }else{
              this.props.history.push("/notes")
            }
          
          }}
        >
          View Your Notes
        </Button>
        <Button
          //--------------------------------------------------------Create New Notes Button
          data-theme={selectedTheme}
          onClick={() =>
            this.props.history.push(`${this.props.match.url}/create`)
          }
        >
          + Create New Notes
        </Button>

        <NoteInput
          //--------------------------------------------------------SearchBar
          //onChange={this.handleInput}
          data-theme={selectedTheme}
          className="search-bar"
          type='text'
          onChange={event => {
            filterByChar(event);
          }}
          type="text"
        />
        <Button
          //--------------------------------------------------------Reset Search Button
          data-theme={selectedTheme}
          onClick={() =>{ this.props.fetchData()}}
        >
          Reset Search
        </Button>
        <Button
          //---------------------------------------------------------Options
          data-theme={selectedTheme}
          onClick={() =>
            this.props.history.push(`${this.props.match.url}/options`)
          }
        >
          Options
        </Button>
        {selectedTheme === "darkTheme" && (
          <img
            className="fade"
            src="data:image/png;base64,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"
          />
        )}
        <Transition
          in={selectedTheme === "darkTheme"}
          timeout={1000}
          unmountOnExit
        >
          {state => {
            switch (state) {
              case "entering":
                TweenMax.fromTo(
                  ".fade",
                  0.2,
                  { opacity: 0 },
                  { opacity: 1 },
                  0.2
                );

                return null;
              case "entered":
                return null;
              case "exiting":
                TweenMax.to(".fade", 1, { opacity: 0 }, 0.2);

              case "exited":
                return null;
            }
          }}
        </Transition>
      </Header>
    );
  }
}
export default NavBar;

const NoteInput = styled("input")`
  width: 100%;
  border: none;
  margin-top: 20px;
  outline: none;
  height: 20px;
  transition: box-shadow 0.2s;
  :focus {
    box-shadow: 0 0 5px ${props => props.theme[props["data-theme"]].button};
    border: 1px solid  ${props => props.theme[props["data-theme"]].button};
  }
  
`;

const Header = styled("header")`
  height: 100%;
  width: 100%;
    min-width: 200px;
    max-width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  color: ${props => props.theme[props["data-theme"]].mainTitle};
  background-color: ${props => props.theme[props["data-theme"]].nav};
  ${props => {
    if (props["data-theme"] === "darkTheme") {
      return `h1{
        color: #fff
      }`;
    }
  }}
  border-right: 1px solid ${props => props.theme[props["data-theme"]].border};
  overflow-x: hidden;
  padding-top: 20px;
  padding: 20px;
  font-weight: bold;
  display:flex;
  flex-direction:column;

  h1{
    overflow:hidden;
  }
`;

const Button = styled("div")`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-align: center;
  color: ${props => props.theme[props["data-theme"]].subBackground};
  background: ${props => props.theme[props["data-theme"]].button};
  
  margin: 10px 0;
  padding: 10px;

  transition: transform .1s ease-in-out;
  :hover{
    transform: scale(1.05);
  }
  :active{
    transform: scale(1)
  }
`;

const OptionButton = styled(Button)`
  display: flex;
  justify-content: flex-end;
`;
