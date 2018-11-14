import React, { Component } from 'react';

class Note extends Component  {
    // constructor(props)  {
    //     super(props)
    // }

    render()    {
        return(
                <div>
                    {this.props.note.title}
                </div>
        );
    }
}

export default Note;
