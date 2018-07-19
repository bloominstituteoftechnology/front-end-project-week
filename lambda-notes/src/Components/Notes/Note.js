import React from 'react';

export default props => {
    return (
        <div className="noteCard" >
                <div className="noteCard__title" >
                    {props.title}
                </div>
                <div className="noteCard__body" >
                    {props.body}
                </div>
        </div>
    );
};