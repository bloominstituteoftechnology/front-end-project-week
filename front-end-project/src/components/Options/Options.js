import React, { Component, Fragment } from "react";
import styled from "react-emotion";
import { TransitionGroup } from "react-transition-group";
import Transition from "react-transition-group/Transition";
import { TweenMax } from "gsap";

class Options extends Component {
  state = {
    themes: ["standardTheme", "darkTheme", 'goldTheme', 'bubbleGum', 'orangeTheme']
  };

  render() {
    const { themes } = this.state;
    const { selectedTheme } = this.props;
    console.log(this.props.match.url === `/notes/options`);
    return (
      <Fragment>
        <NoteTitle  className="options" data-theme={selectedTheme}>Themes:</NoteTitle>
        <NoteButtonContainer>
          {themes.map(theme => (
            <NoteButton
            className="options"
              data-theme={selectedTheme}
              onClick={() => this.props.changeTheme(theme)}
            >
              {theme}
            </NoteButton>
          ))}
        </NoteButtonContainer>
        <Transition
            in={this.props.match.url === `/notes/options`}
            timeout={1000}
            appear = {true}
          >
            {state => {
              switch (state) {
                case 'entering':                
                  TweenMax.staggerFromTo('.options', 0.2, {opacity:0, x:50}, {opacity:1, x:0}, 0.1)
                 
                case 'entered':
                TweenMax.set('.options', {transform: 'unset'})
                  return null;
                case 'exiting':
             
                case 'exited':
                  return null;
              }
            }}
          </Transition>

      </Fragment>
    );
  }
}

export default Options;

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

const NoteButtonContainer = styled('div')`
    display:flex;
    flex-direction: column;
`

const NoteTitle = styled('h2') `
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`