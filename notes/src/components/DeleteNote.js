import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';

export class DeleteNote extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: true,
            id: this.props.match.params.id
        }
        console.log(this.state.id)
    }

    

    deleteItem = id => {
        axios.delete(`https://localhost:3333/notes/${id}/delete`)
            .then(response => {this.setState(
                {open: false}
            )})
            .catch(err => console.log(err))
        // this.closeBox()
    }

    closeBox = () => {
        this.setState({open: false})
    }


    render() {
    
        return(
            this.state.open === true ?
            <div className="delete">
                <p>Are you sure you want to delete this?</p>
                <button onClick={() => this.deleteItem(this.state.id)}>Delete</button>
                <Link to={`/note/${this.props.match.params.id}`} >
                    <button onClick={() => this.closeBox()} >No</button>
                </Link>
            </div>
            : null
        )
    }
}