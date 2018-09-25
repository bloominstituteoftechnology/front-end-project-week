import React, { Component, Fragment } from "react";
import styled from "react-emotion";


class Options extends Component {
  state = {
    themes: ["standardTheme", "darkTheme", 'goldTheme']
  };

  render() {
    const { themes } = this.state;
    const { selectedTheme } = this.props;
    console.log(selectedTheme);
    return (
      <Fragment>
        <NoteTitle data-theme={selectedTheme}>Themes:</NoteTitle>
        <NoteButtonContainer>
          {themes.map(theme => (
            <NoteButton
              data-theme={selectedTheme}
              onClick={() => this.props.changeTheme(theme)}
            >
              {theme}
            </NoteButton>
          ))}
        </NoteButtonContainer>
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
  border: 1px solid ${props => props.theme[props["data-theme"]].border};
  padding: 10px;
  width: 200px;
  font-weight: bold;
`;

const NoteButtonContainer = styled('div')`
    display:flex;
    flex-direction: column;
`

const NoteTitle = styled('h2') `
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`