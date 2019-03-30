import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteCard extends Component {

    render() {
        console.log(this.props.notes);
        return (
            <div className="card-container">
                <h2 className="main-container-header">{this.props.text}</h2>
                <ul className="card-list">
                  {this.props.notes.map(element =>{
                      return(
                          <li className="card" key={element.id}>
                         <Link 
                            to={{pathname:`/notes/${element.id}`, state: this.props.notes}}>
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
