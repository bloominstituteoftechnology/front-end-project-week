import React, { Component } from 'react';
import axios from 'axios';
import NotesList from './notesList';
import AddNote from './addNote';


class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
           
        };
    }



    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                console.log(response);
                this.setState({ notes: response.data })
            })
            .catch(err => {
                console.log(err)
            })
    };

  
   
    changeState = () => {
        axios.get("https://fe-notes.herokuapp.com/note/get/all").then(res =>
      this.setState({
        notes: res.data
      })
    );
      }
   
    render() {
        console.log('STATE', this.state);
        return (
            <div>
                <h3>Your Notes:</h3>
                <div className='notes-container'>
                    <NotesList notes={this.state.notes} />

                    <AddNote changeState={this.changeState} />

                </div>
            </div>

        )
    }

}

export default NotesContainer;