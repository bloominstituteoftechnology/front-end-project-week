import React, { Component } from 'react';
import axios from '../../node_modules/axios';
import { Link } from 'react-router-dom';


class Note extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     note: null
        // };
    }

    componentDidMount() {
        console.log(this.props);
        // const id = this.props.match.notes._id;
        // this.fetchNote(id);
    }

    // getNote = id => {
    //     axios 
    //         .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    //         .then(response => {
    //             console.log('Response:' + response);
    //             this.setState(() => ({ note: response.data }));
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // };

    render() {
        return (
            
                <div className='note-container'>
                {console.log('hello from note return ', this.props)}
                {console.log('this is notes ', this.props.notes)}
                
                    <h3>
                        Title: {this.props.note.title}
                    </h3>
                    <p>
                        Body: {this.props.note.textBody}
                    </p>

                </div>
            
        );
    }
}

export default Note;