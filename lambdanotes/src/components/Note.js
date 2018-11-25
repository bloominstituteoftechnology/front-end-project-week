import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { NotesContext } from '../contexts/NotesProvider'
import './style.css'


class Note extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }
    render(){

        const {id} = this.props.match.params;
        
        return (
            <div>
            <nav>
                <Link to={`/edit/${id}`}>
                    <p>Edit</p>
                </Link>
                <Link to={`/delete/${id}`}>
                    <p>Delete</p>
                </Link>
            </nav>
            <NotesContext.Consumer>
                {data =>{
                    const notesArray = data.state.notes
                    let currNote = notesArray.find(note => note._id === id);
                return (
                    <div className="noteEnlarged">
                        <h2>{currNote.title}</h2>
                        <p>{currNote.textBody}</p>
                    </div>
                )
        
        
            }}
            </NotesContext.Consumer>
        
            </div>
        
        )
    }
}



export default Note