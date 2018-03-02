import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NoteView from './NoteView';


const Note = (props) => 
        <div className='Note-Container'>
            <h3 className='Note-Title'>{props.note.title}</h3>
            <p className='Note-Text'>{props.note.text}</p>
        </div>;


class NoteList extends Component {

    render() {
        return (
            <Router>
            <div className='NoteList-Container' onClick={this.handleClick}>
                <h1>Your Notes:</h1>
                <div className='Note-List'>
                    {this.props.notes.map((note, index) => 
                    <Note key={index} note={note}>
                        <Link to='/noteview'>{note}</Link>
                    </Note>
                    )}
                </div>
                <Route path='/noteview' component={NoteView}/>
            </div>
            </Router>
        );
    }
  }
  
  export default NoteList;