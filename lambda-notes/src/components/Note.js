import React, {Component} from 'react';

class Note extends Component {
    
    render() {

        return ( 
            <div className='note-view'>
                <h1>{this.props.title}</h1>
                <div>
                    <p>{this.props.content}</p>
                </div>
                <button>Delete</button>
            </div>
         );
    }
}
 
export default Note;