import React from 'react';
import OneNote from './OneNote';
import PropTypes from 'prop-types';
import {ComponentHeader, ComponentBody} from './style';

export default class NoteList extends React.Component{
    push = address =>{
        this.props.history.push(address);
    }

    render(){
        return(
            <ComponentBody>
                <ComponentHeader>
                    Your Notes:
                </ComponentHeader>
                <div className='Notes'>
                    {this.props.notes.map((note,index) =>{
                        return(
                            <OneNote title={note.title} content={note.content} index={index} key={index}/>
                        )
                    })}
                </div>
            </ComponentBody>
        )
    }
}

NoteList.propType = {
    notes: PropTypes.arrayOf({
        note: PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.string
        })
    }
    )
}