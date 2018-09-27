import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Note = (props) => {
    let truncatedBody = props.textBody;
    if(props.match.path === '/' && props.textBody.length > 170){
        truncatedBody = props.textBody.substring(0, 170)+' ...';
    }

    let truncatedTitle = props.title;
    if(props.match.path === '/' && props.textBody.length > 40){
        truncatedTitle = props.textBody.substring(0, 40)+' ...';
    }

    return (
        <div className = 'note-container'>
        <Link to = {`/notes/${props._id}`} key={`${props._id}`}>
            <div>
            <div className = 'note-title'>{`${truncatedTitle}`}</div>
            
            <div className = 'note-divider'></div>
            <div className='note-content'>{`${truncatedBody}`}</div>
            </div>
            </Link>

            <div className='note-tags'>
           
            
            {props.tags.map(tag => {
                return <Link to = {`/notes/tags/${tag}`} key={`${tag}${props._id}`}><span className = 'tag-span'>{tag}</span></Link>
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