import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state={
            note: null,
            id: null
        };
    }

    componentDidMount(){
        const id =this.props.match.params.id;
        this.setState({
            id: id
        })
        console.log(this.props.match.params.id);
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState(()=>({note: response.data}))
            })
            .catch(err =>{
                console.log(err)
            });
    };

    deleteHandler=(id)=>{
        return()=>{
            axios
                .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
                .then(response =>{
                    console.log(response)
                })
                .catch(err => console.log(err))
        }

    }



    render() {
        if(!this.state.note){
            return <div>Loading note...</div>;
        }

        return (
            <div className="noteCard">
                <h2 className="noteHeading">{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
                <p onClick={this.deleteHandler(this.state.id)}>Delete</p>
                <Link to ={`/update/${this.state.id}`}>Update</Link>
            </div>
        )
    }
}

export default SingleNote