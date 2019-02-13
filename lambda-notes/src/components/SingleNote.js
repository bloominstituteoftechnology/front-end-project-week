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
            .get(`http://localhost:9999/api/notes/${id}`)
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
                .delete(`http://localhost:9999/api/notes/${id}`)
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
        console.log(this.state.note)
        return (
            <div className="singleNote">
                <Link className="singleEdit" to ={`/edit/${this.state.id}`}>Edit</Link>
                <p className="singleDelete" onClick={this.deleteHandler(this.state.id)}>Delete</p>
                <h2 className="singleNoteHeading">{this.state.note[0].title}</h2>
                <p className="singlePara">{this.state.note[0].textBody}</p>
            </div>
        )
    }
}

export default SingleNote