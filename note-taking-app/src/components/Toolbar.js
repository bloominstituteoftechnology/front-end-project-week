import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getNotes, addNote } from '../actions';

import {
  PrimaryButton, IButtonProps
} from 'office-ui-fabric-react/lib/Button';

class Toolbar extends Component {

  render() {
    const { getNotes, addNote } = this.props
    return (
      <div>
        <h3>Lambda Note</h3>
        <div style={style.displayCenter}>
          <div style={style.button}>
            <PrimaryButton
              style={style.PrimaryButton}
              primary={ true }
              iconProps={ { iconName: 'Stack' } }
              text='View Your Notes'
              onClick={ getNotes }
              />
          </div>
          <div style={style.button}>
            <PrimaryButton
              style={style.PrimaryButton}
              primary={ true }
              iconProps={ { iconName: 'CirclePlus' } }
              text='Create New Note'
              onClick={ addNote }
              />
          </div>
        </div>
      </div>
    )
  }
} 

const style = {
  displayCenter: {
    alignText: 'center'
  },
  button: {
    width: '100%',
    marginBottom: '10px'
  },
  PrimaryButton: {
    width: '100%'
  }
}

export default connect(null, { getNotes, addNote })(Toolbar);