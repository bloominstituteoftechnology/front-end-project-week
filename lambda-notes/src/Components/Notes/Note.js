import React from 'react';

export default props => {
    return (
        <div className="noteCard">
            <div className="noteCard_title">
                {props.title}
            </div>
            <div className="noteCard_body">
                {props.body}
            </div>
        </div>
    );
};