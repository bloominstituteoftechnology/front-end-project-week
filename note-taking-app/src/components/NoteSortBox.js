import React from 'react';
import { connect } from 'react-redux';

import { sortNote } from '../actions';

import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

class NoteSortBox extends React.Component {
  render() {
    const { sortNote, sortType } = this.props
    return(
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <DefaultButton
          iconProps={ { iconName: 'Ringer' } }
          text='Due Date'
          onClick={() => sortNote('due') }
        />
        <DefaultButton
          iconProps={ { iconName: 'Ascending' } }
          text='Ascending'
          onClick={() => sortNote('asc') }
        />
        <DefaultButton
          iconProps={ { iconName: 'Descending' } }
          text='Descending'
          onClick={() => sortNote('des') }
        />
      </div>
    )
  }
}

export default connect(null, { sortNote })(NoteSortBox);