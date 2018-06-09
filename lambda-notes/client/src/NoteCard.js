import React, { Component } from 'react';
import { dummydata } from './dummydata/dummydata';
import { Link } from 'react-router-dom';
import SingleNoteView from './SingleNoteView';

class NoteCard extends Component {
    constructor(props){
        super(props);
        this.state={
            notes:[{dummydata}]
        }
    }

    render() {
        console.log(this.state.notes[0].dummydata);
        return (
            <div className="card-container">
                <h2 className="main-container-header">{this.props.text}</h2>
                <ul className="card-list">
                  {this.state.notes[0].dummydata.map(element =>{
                      return(
                          <li className="card" key={element.id}>
                         <Link 
                            to={{pathname:`/notes/${element.id}`, state: this.state.notes}}
                            component={SingleNoteView}>
                            {element.note_title}
                        </Link>
                            <hr/>
                            {element.note_body}
                          </li>

                      )
                  })}  
                
                </ul>
            </div>
        );
    }
}

export default NoteCard;
