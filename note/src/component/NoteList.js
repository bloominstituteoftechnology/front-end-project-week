import React, {Component} from 'react';
import '../App.css';
import noteData from '../noteData';
import SideBar from './Sidebar';


const Note = (props) => 
    <div className='Note-Container'>
        <h3 className='Note-Title'>{props.note.title}</h3>
        <p className='Note-Text'>{props.note.text}</p>
    </div>;

class NoteList extends Component {
    render() {
        return (
            <div className="Main-Content">
                <SideBar />
                <div className='NoteList-Container'>
                    <h1>Your Notes:</h1>
                    <div className='Note-List'>
                        {noteData.map((note, index) => {
                            return (
                                <Note note={note} key={index} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default NoteList;