import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NoteCard extends Component {
    constructor(props){
        super(props);
        this.state={
            notes:[]
        }
    }

    componentDidMount() {
        let promise = axios.get("http://localhost:5555/api/notes/faker");

        promise 
            .then(response => {
                console.log(response);
                this.setState({notes: response.data});
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        // console.log(this.state.notes[0].dummydata);
        return (
            <div className="card-container">
                <h2 className="main-container-header">{this.props.text}</h2>
                <ul className="card-list">
                  {/* {this.state.notes[0].dummydata.map(element =>{
                      return(
                          <li className="card" key={element.id}>
                         <Link 
                            to={{pathname:`/notes/${element.id}`, state: this.state.notes}}>
                            {element.note_title}
                        </Link>
                            <hr/>
                            {element.note_body}
                          </li>

                      )
                  })}   */}
                
                </ul>
            </div>
        );
    }
}

export default NoteCard;
