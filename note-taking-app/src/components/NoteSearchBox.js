import React from 'react';
import { connect } from 'react-redux';

import { searchNote } from '../actions';

import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

class NoteSearchBox extends React.Component {
  render() {
    const { searchNote } = this.props
    return(
      <SearchBox
        placeholder='Search'
        onFocus={ () => console.log('onFocus called') }
        onBlur={ () => console.log('onBlur called') }
        onChange={(text) => searchNote(text) }
      />
    )
  }
}

export default connect(null, { searchNote })(NoteSearchBox);