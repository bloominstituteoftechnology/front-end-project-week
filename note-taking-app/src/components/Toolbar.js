import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getNotes, addNote, showSearchBox, hideSearchBox } from '../actions';

import NoteSearchBox from './NoteSearchBox';

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

class Toolbar extends Component {
  render() {
    const { searchBoxOpen } = this.props;
    const { getNotes, addNote, showSearchBox, hideSearchBox } = this.props
    return (
      <div style={style.displayFlex}>
        <h3>Lambda Note</h3>
        <div className='ms-textAlignLeft' style={style.displayFlexSplit}>
          <div>
            <div style={style.button}>
              <PrimaryButton
                style={style.PrimaryButton}
                iconProps={ { iconName: 'Stack' } }
                text='Notes'
                onClick={ getNotes }
                />
            </div>
            <div style={style.button}>
              <PrimaryButton
                style={style.PrimaryButton}
                iconProps={ { iconName: 'CirclePlus' } }
                text='New'
                onClick={ addNote }
                />
            </div>
          </div>
          <div>
            <div style={style.button}>
              <PrimaryButton
                style={style.PrimaryButton}
                iconProps={ { iconName: 'SortLines' } }
                text='Sort'
                onClick={ getNotes }
                />
            </div>
            <div className='ms-CalloutCoverExample-buttonArea' ref={(menuButton) => this._menuButtonElement = menuButton } style={style.button}>
              <PrimaryButton
                style={style.PrimaryButton}
                onClick={ showSearchBox }
                text='Search'
                iconProps={ { iconName: 'Search' } }
              />
            </div>
            <Callout
              className='ms-CalloutExample-callout'
              target={ this._menuButtonElement }
              onDismiss={ hideSearchBox }
              setInitialFocus={ true }
              hidden={ !searchBoxOpen }
              directionalHint={DirectionalHint.leftTopEdge}
              coverTarget={ true }
              isBeakVisible={ false }
              gapSpace={0}
            >
              <div className='ms-CalloutExample-inner' style={style.extraWidth}>
                <NoteSearchBox />
              </div>
            </Callout>
          </div>
        </div>
      </div>
    )
  }
} 

const style = {
  button: {
    marginBottom: '10px',
  },
  PrimaryButton: {
    width: '100%',
    textAlign: 'left'
  },
  extraWidth: {
    width: '50vw'
  },
  displayFlex: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  displayFlexSplit: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}

const mapStateToProps = (state) => {
  const { toolsReducer } = state
  return toolsReducer
}

export default connect(mapStateToProps, { getNotes, addNote, showSearchBox, hideSearchBox })(Toolbar);