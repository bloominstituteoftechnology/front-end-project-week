import React from 'react';
import { connect } from 'react-redux';

import { selectNote } from '../actions';

import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

const NoteSearchBox = ({id, title, content, selectNote }) => 
  <SearchBox
    placeholder='Search'
    onFocus={ () => console.log('onFocus called') }
    onBlur={ () => console.log('onBlur called') }
    onChange={ () => console.log('onChange called') }
  />

const style = {
  
}

export default connect(null, { selectNote })(NoteSearchBox);