import React from 'react';

import './Button.css';

export const Button = props => {
    return (
    <div className="cardBody">
     <button className="button"> {props.name} </button>
    </div>  
    );
}

export default Button;