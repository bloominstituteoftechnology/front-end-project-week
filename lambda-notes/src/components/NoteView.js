import React from 'react';

const NoteView = props => {
    const { id, title, content, tags } = props.note;
    return (
        <div className="NoteView-container">
            <div className="NoteView-header">
                <h3>{`${title}`}</h3>
            </div>
            <div className="NoteView-note">
                <p>{content}</p>
            </div>
            <div className="NoteView-tag">
                {/* {tags.length > 0 ? tags.map((tag) => <span>{tag}</span>) : <span></span>} */}
            </div>
            {/* <div>{`${props.note['_id'].substr(-4)}`}</div> */}
            <div>{`#${id}`}</div>
        </div>
    );

};

export default NoteView;