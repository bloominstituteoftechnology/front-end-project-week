import React, { Component } from 'react';
import axios from 'axios';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: ''
         }
    }
    render() { 
        return ( 
            <div>
                <form>
                    <input
                    name= 'title'
                    />
                    <input 
                    name= 'content'
                    />
                </form>
            </div>
         );
    }
}
 
export default NoteForm;