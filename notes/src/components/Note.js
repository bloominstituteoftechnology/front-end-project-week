import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Markdown from 'react-markdown';

const Note = (props) => {
    let truncatedBody = props.textBody;
    if(props.match.path === '/' && props.textBody.length > 170){
        truncatedBody = props.textBody.substring(0, 170)+' ...';
    }

    let truncatedTitle = props.title;
    if(props.match.path === '/' && props.title.length > 40){
        truncatedTitle = props.title.substring(0, 40)+' ...';
    }

    let truncatedTags = props.tags;
    if(props.match.path === '/' && props.tags.length > 5){
        truncatedTags = [];
        for(let i = 0; i < 5; i++){
            truncatedTags.push(props.tags[i]);
        }
    }

    return (
        <div className = 'note-container'>
        <Link to = {`/notes/${props._id}`} key={`${props._id}`}>
            <div>
            <div className = 'note-title'><Markdown escapeHtml={true} source={`${truncatedTitle}`} /></div>
            
            <div className = 'note-divider'></div>
            <div className='note-content'><Markdown escapeHtml={true} source={`${truncatedBody}`} /></div>
            </div>
            </Link>

            <div className='note-tags'>
           
            
            {truncatedTags.map(tag => {
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