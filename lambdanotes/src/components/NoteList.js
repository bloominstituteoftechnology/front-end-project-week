import React from 'react';
//import ReactDom from 'react-dom';
// import axios from 'axios';
import dummyData from '../dummydata';
import { Route } from 'react-router-dom';
import NotePage from './NotePage';

import Note from './Note';

class NoteList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          note: 
            {
              title: '',
              content: '',
            },
          noteList: [],
          input: ''
        }
      }
    
      componentDidMount() {
          this.setState({
              noteList: dummyData
          })
    //     axios
    //       .get('localhost:5050/api/notes')
    //       .then(response => {
    //         console.log(response)
    //         this.setState({noteList: response.data})
    //       })
    //       .catch(err => {
    //         console.log("IN CATCH", err);
    //       })
        }

    render() {
        return(
            <div className='note-list'>
                {this.state.noteList.map((note) => {
                    console.log(note);
                    return <Note key={note.id} content = {note} />
                })}
                <Route
                    path='notes/:id'
                    render={props => (
                        <NotePage note={this.state.noteList} {...props} />
                    )}
                />
            </div>
        )
    }
}

export default NoteList;