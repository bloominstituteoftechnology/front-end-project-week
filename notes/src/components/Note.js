import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Markdown from 'react-markdown';

const Note = (props) => {
    let truncatedBody = props.content;
    if(props.match.path === '/' && props.content.length > 145){
        truncatedBody = props.content.substring(0, 145)+' ...';
    }

    let truncatedTitle = props.title;
    if(props.match.path === '/' && props.title.length > 40){
        truncatedTitle = props.title.substring(0, 40)+' ...';
    }

    let tagsArray = props.tags.split(/\s*,\s*/);

    let truncatedTags = [];
    if(props.match.path === '/' && tagsArray.length > 5){
        for(let i = 0; i < 5; i++){
            truncatedTags.push(tagsArray[i]);
        }
    } else {
        truncatedTags = tagsArray;
    }

    return (
        <div className = 'note-container'>
        <Link to = {`/notes/${props.id}`} key={`${props.id}`}>
            <div>
            <div className = 'note-title'><Markdown escapeHtml={true} source={`${truncatedTitle}`} /></div>
            
            <div className = 'note-divider'></div>
            <div className='note-content'><Markdown escapeHtml={true} source={`${truncatedBody}`} /></div>
            </div>
            </Link>

            <div className='note-tags'>
            {truncatedTags.map(tag => {
                return <Link to = {`/notes/tags/${tag}`} key={`${tag}${props.id}`}><span className = 'tag-span'>{tag}</span></Link>
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