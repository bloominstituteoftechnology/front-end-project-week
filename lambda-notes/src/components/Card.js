import React from 'react';

const Card =props=>{
    const{title,textBody}=props.note;
    return (
        <div className="notecard">
            <div>
                <div>
                    <h2>{title}</h2>
                </div>
                <p>{textBody}</p>
            </div>
        </div>
    );
}
export default Card;