import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Note = (props) => {
    return (
        <div className = 'note-container'>
        
            <div className = 'note-title'>{props.title}</div>
            
            <div className = 'note-divider'></div>
            <div className='note-content'>{props.textBody}</div>
            
            <div className='note-tags'>
            
            {props.tags.map(tag => {
                return <Link to = {`/notes/tags/${tag}`}><span className = 'tag-span' key={tag}>{tag}</span></Link>
            })}
            </div>

        </div>
    )
}


const mapStateToProps = () => {
    return {
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
  })(Note));