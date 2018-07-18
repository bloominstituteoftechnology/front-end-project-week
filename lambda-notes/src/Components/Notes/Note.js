import React from 'react';

export default props => {
    return (
        <div className="noteCard">
            <div className="noteCard_title">
                {props.title}
                {/* displays title of notes */}
            </div>
            <div className="noteCard_body">
                {props.body}
                {/* displays text of notes */}
            </div>
        </div>
    );
};