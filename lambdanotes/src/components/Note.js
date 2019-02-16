import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { NotesContext } from '../contexts/NotesProvider'
import Delete from './Delete'
import './style.css'


class Note extends Component{
    constructor(props){
        super(props)
        this.state = {
            //control whether Delete.js displays or not
            showModal: false
        }
    }

    componentDidMount(){
        //page will always open at top of screen
        window.scrollTo(0,0)
    }

    openModal = () =>{
        //used by Delete.js to control whether to display or not
        this.setState({
            showModal: true
        })
    }

    closeModal = () =>{
        this.setState({
            showModal: false
        })
    }
    render(){

        const {id} = this.props.match.params;
        return (
            <div>
                <nav>
                    <Link to={`/edit/${id}`}>
                        <p>Edit</p>
                    </Link>
                    <a onClick={this.openModal} href="_blank"><p>Delete</p></a>
                </nav>
                <NotesContext.Consumer>
                    {data =>{
                        const notesArray = data.state.notes
                        let currNote = notesArray.find(note => note.id === id);
                    return (
                        <div className="noteEnlarged">
                            <h2>{currNote.title}</h2>
                            <p>{currNote.textBody}</p>
                        </div>
                    )
            
            
                }}
                </NotesContext.Consumer>
                <Delete id={id} showModal={this.state.showModal} closeModal={this.closeModal}/>
            </div>
        
        )
    }
}



export default Note