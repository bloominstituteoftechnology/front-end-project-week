import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getNotes, addNote, showSearchBox, hideSearchBox, showSortBox, hideSortBox } from '../actions';

import NoteSearchBox from './NoteSearchBox';
import NoteSortBox from './NoteSortBox';
import ExportSetup from './ExportSetup';

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';

class Toolbar extends Component {
  render() {
    const { searchBoxOpen, sortBoxOpen } = this.props;
    const { getNotes, addNote, showSearchBox, hideSearchBox, showSortBox, hideSortBox } = this.props
    return (
      <div style={style.displayFlex}>
        <h3>Lambda Note</h3>
        <div className='ms-textAlignLeft' style={style.displayFlexSplit}>
          <div>
            {/**GET ALL NOTES BUTTON**/}
            <div style={style.button}>
              <PrimaryButton
                style={style.PrimaryButton}
                iconProps={ { iconName: 'Stack' } }
                text='Notes'
                onClick={ getNotes }
                />
            </div>
            {/**CREATE NEW NOTE BUTTON**/}
            <div style={style.button}>
              <PrimaryButton
                style={style.PrimaryButton}
                iconProps={ { iconName: 'CirclePlus' } }
                text='New'
                onClick={ addNote }
                />
            </div>
            {/**EXPORT NOTES BUTTON**/}
            <div style={style.button}>
              <ExportSetup />
            </div>
          </div>
          <div>
          {/**SORT BUTTON AND CALLOUT**/}
          <div className='ms-CalloutCoverExample-buttonArea' ref={sortButton => this.sortButtonElement = sortButton } style={style.button}>
              <PrimaryButton
                style={style.PrimaryButton}
                onClick={ showSortBox }
                text='Sort'
                iconProps={ { iconName: 'SortLines' } }
              />
            </div>
            <Callout
              className='ms-CalloutExample-callout'
              target={ this.sortButtonElement }
              onDismiss={ hideSortBox }
              setInitialFocus={ true }
              hidden={ !sortBoxOpen }
              directionalHint={DirectionalHint.leftTopEdge}
              coverTarget={ true }
              isBeakVisible={ false }
              gapSpace={0}
            >
              <div className='ms-CalloutExample-inner'>
                <NoteSortBox />
              </div>
            </Callout>

            {/**SEARCH BUTTON AND CALLOUT**/}
            <div className='ms-CalloutCoverExample-buttonArea' ref={searchButton => this.searchButtonElement = searchButton } style={style.button}>
              <PrimaryButton
                style={style.PrimaryButton}
                onClick={ showSearchBox }
                text='Search'
                iconProps={ { iconName: 'Search' } }
              />
            </div>
            <Callout
              className='ms-CalloutExample-callout'
              target={ this.searchButtonElement }
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

export default connect(mapStateToProps, { getNotes, addNote, showSearchBox, hideSearchBox, showSortBox, hideSortBox })(Toolbar);