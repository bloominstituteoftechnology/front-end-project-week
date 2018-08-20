import React, {Component} from 'react';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: '',
            id: '',
            update: false
         }
    }


    render() {
        const {title, content, id}
        return ( 
            <div className='note-view'>
                <h1>{title}</h1>
                <div>
                    <p>{content}</p>
                </div>
                <button onClick={() => this.delete(id)}>Delete</button>
            </div>
         );
    }
}
 
export default Note;