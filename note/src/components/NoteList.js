import React, {Component} from 'react';
import '../App.css';
import noteData from '../noteData';
import SideBar from './Sidebar';
import NoteView from './NoteView';
import { Route, Link } from 'react-router-dom';

const Note = (props) => {
    return (
        <div className='Note-Container'>
            <h2>{props.note.id}</h2>
            <h3 className='Note-Title'>{props.note.title}</h3>
            <p className='Note-Text'>{props.note.text}</p>
        </div>
    );
}

class NoteList extends Component {
    // handleClick(event) {
    //     event.preventDefault();
    //     const idk = event.target.dataset.index;
    //     <Route path="noteview/:idk" component={NoteView} />;
    // }
    render() {
        return (
            <div className="Main-Content">
                <SideBar />
                <div className='NoteList-Container'>
                    <h1>Your Notes:</h1>
                    <div className='Note-List'>
                        {noteData.map((note) => {
                            return (
                                <Note note={note} key={note.id}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default NoteList;