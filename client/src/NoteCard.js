import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteCard extends Component {

    render() {
        return (
            <div className="card-container">
                <h2 className="main-container-header">{this.props.text}</h2>
                <ul className="card-list">
                  {this.props.notes.map(element =>{
                      return(
                          <li className="card" key={element.id + element.title}>
                         <Link 
                            to={{pathname:`/notes/${element.id}`, state: {element}}}>
                            {element.title}
                        </Link>
                            <hr/>
                            {element.body}
                          </li>

                      )
                  })}  
                
                </ul>
            </div>
        );
    }
}

export default NoteCard;
