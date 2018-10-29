import React from 'react';

import axios from 'axios';
import SingleNote from './SingleNote';




class NotesDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            notes : []
        }
    }//Constructor end..

    //ComponentDidMount to fetch data from API
    componentDidMount() {
        axios
            .get('https://killer-notes.herokuapp.com/note/get/all')
            .then(response => {
                    console.log(response.data);
                    this.setState({ notes : response.data})
             })
            .catch(error => console.log(error))
    }

    render() {
        console.log("State from API .. ", this.state.notes);
        return (
            <div>
                <h1>NotesDisplay</h1>
                {this.state.notes.map((note, index) => 
                                                    <SingleNote
                                                        key = {note.id}
                                                        data = {note}
                                                    />
                )}
            </div>
        )
    }
}

export default NotesDisplay;
