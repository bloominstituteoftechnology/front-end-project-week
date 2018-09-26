import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Note = (props) => {
    return (
        <div className = 'note-container' onClick={props.seekNote}>
            <div className = 'note-title'>{props.title}</div>
            <div className = 'note-divider'></div>
            <div className='note-content'>{props.textBody}</div>
        </div>
    )
}


const mapStateToProps = () => {
    return {
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
  })(Note));