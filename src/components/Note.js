import React from 'react';
import {Link} from 'react-router-dom';
import { MarkdownPreview } from 'react-marked-markdown';

const Note = (props) => {
    
        return (
                <div className="card text-black mb-3" style={{height: '200px', overflow: 'hidden' }} >
                    <Link  to={`/note/${props.id}`} style={{textDecoration: 'none', fontSize: '1.8rem', color: '#333', overflow: 'hidden', lineHeight: '1.5'}}>
                    <div className="card-header" >{props.title}</div>
                    </Link>
                    <div className="card-body">
                        <MarkdownPreview value={props.content} style={{height: '150px', fontSize: '1.6rem', color: '#333', fontWeight: 'bold'}} />
                    </div>
                </div>
         );
    
}
 
export default Note;