import React from 'react'
import { connect } from 'react-redux';

const searchSuggest = (props) => {
    return (
        <ul>
            <p>{props.note.title}</p>
        </ul>
    )
  }
  
  export default connect(null, {})(searchSuggest);