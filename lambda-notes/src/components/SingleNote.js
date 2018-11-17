import React, { Component } from 'react';
import axios from 'axios';

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state={
            note: null
        };
    }

    componentDidMount(){
        const id =this.props.match.params.id;
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

    render() {
        if(!this.state.note){
            return <div>Loading note...</div>;
        }

        return (
            <div className="noteCard">
                <h2 className="noteHeading">{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
                <p>Delete</p>
            </div>
        )
    }
}

export default SingleNote