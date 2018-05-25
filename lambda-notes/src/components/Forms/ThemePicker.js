//Dependencies
import React from 'react';
import { connect } from 'react-redux';
//Redux
import { changeTheme } from '../Actions';
//Components
import { Button, RLink } from '../Button';

const styles = {
  height: `100%`,
  padding: `2rem`,
  backgroundColor: `var(--color-bg--main)`,
  fontFamily: `'Roboto', sans-serif`,
  color: `var(--color--main)`,
  display: `flex`,
  justifyContent: `space-around`,
}

const buttonMod = {
  width: `30%`,
}

const ThemePicker = (props) => {
  return(
    <div style={styles} >
    <h4>What's your style?</h4>
      <Button style={buttonMod} onClick={() => props.changeTheme("default")}>Default</Button>
      <Button style={buttonMod} onClick={() => props.changeTheme("dark")}>Dark</Button>
    </div>
  );
}
export default connect(null, { changeTheme })(ThemePicker);