import React from 'react';
import {Link} from 'react-router-dom';
import { MarkdownPreview } from 'react-marked-markdown';

const Note = (props) => {
    
        return (
                <div className="card text-black mb-3" style={{height: '200px' }} >
                    <Link  to={`/note/${props.id}`} style={{textDecoration: 'none', fontSize: '1.8rem', color: '#333', lineHeight: '1.5'}}>
                    <div className="card-header" style={{fontSize: '2.2rem'}} >{props.title}</div>
                    </Link>
                    <div className="card-body" style={{ height: '200px', overflow: 'hidden'}}>
                        <MarkdownPreview value={props.content} />
                    </div>
                </div>
         );
    
}
 
export default Note;