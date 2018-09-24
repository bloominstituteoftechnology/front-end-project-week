import React from 'react';
import PropTypes from 'prop-types';

export default class OneNote extends React.Component{
    render(){
        return(
            <div>
                <div className='title'>
                    {this.props.title}
                </div>
                <div className='noteContent'>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

OneNote.propType = {
    title: PropTypes.string,
    content: PropTypes.string,
}