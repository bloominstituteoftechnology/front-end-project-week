import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getNotes, addNote, searchNote } from '../actions';

import NoteSearchBox from './SearchBox';
import {
  PrimaryButton
} from 'office-ui-fabric-react/lib/Button';

class Toolbar extends Component {

  render() {
    const { openSearchBox, getNotes, addNote, searchNote } = this.props
    return (
      <div>
        <h3>Lambda Note</h3>
        <div style={style.displayCenter}>
          <div style={style.button}>
            <PrimaryButton
              style={style.PrimaryButton}
              primary={ true }
              iconProps={ { iconName: 'Stack' } }
              text='Notes'
              onClick={ getNotes }
              />
          </div>
          <div style={style.button}>
            <PrimaryButton
              style={style.PrimaryButton}
              primary={ true }
              iconProps={ { iconName: 'CirclePlus' } }
              text='New'
              onClick={ addNote }
              />
          </div>
          <div style={style.button}>
            <PrimaryButton
              style={style.PrimaryButton}
              primary={ true }
              iconProps={ { iconName: 'Search' } }
              text='Search'
              onClick={ searchNote }
              />
              {openSearchBox && (
                <NoteSearchBox />
              )}
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
    marginBottom: '10px',
  },
  PrimaryButton: {
    width: '100%',
    textAlign: 'left'
  }
}

const mapStateToProps = (state) => {
  const { toolsReducer } = state
  console.log(state)
  return toolsReducer
}

export default connect(mapStateToProps, { getNotes, addNote, searchNote })(Toolbar);