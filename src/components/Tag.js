import React from 'react';
import '../styles/Tag.css';

// returns to ViewNote how to display each Tag
const Tag = props => {
    return <p className='tag'>{props.tag},</p>
}

export default Tag;