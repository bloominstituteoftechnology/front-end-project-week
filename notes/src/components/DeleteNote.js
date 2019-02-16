import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';

export class DeleteNote extends Component {
    constructor(){
        super()
        this.state = {
            open: true,
        }
    }

    deleteItem = id => {
        axios.delete(`https://localhost:3333/notes/${id}`)
            .then(response => {this.setState(
                {open: false}
            )})
            .catch(err => console.log(err))
        this.closeBox()
    }

    closeBox = () => {
        this.setState({open: false})
    }


    render() {
        return(
            this.state.open === true ?
            <div className="delete">
                <p>Are you sure you want to delete this?</p>
                <button onClick={() => this.deleteItem(this.props.match.params.id)}>Delete</button>
                <Link to={`/note/${this.props.match.params.id}`} >
                    <button onClick={() => this.closeBox()} >No</button>
                </Link>
            </div>
            : null
        )
    }
}