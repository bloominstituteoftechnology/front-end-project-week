import React, { Component } from 'react';



export class Notes extends Component {
    render(){
    return (
        <div>
            {this.props.notes.map(note => {
                return (
                    <div>
                        <h4>{note.title}</h4>
                        <p>{note.textBody}</p>
                    </div>
                )
            })}
            
        </div>
    )
  }
}
